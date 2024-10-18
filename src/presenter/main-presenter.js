import { render, remove } from '../framework/render';
import UiBlocker from '../framework/ui-blocker/ui-blocker.js';

//@ utils
import { sortByDay, sortByTime, sortByPrice } from '../utils/point';

//@ views
import PointsListView from '../view/points-list-view';
import SortView from '../view/sort-view';
import NoPointsView from '../view/no-points-view';
import LoadingView from '../view/loading-view.js';
import FailedLoadView from '../view/failed-load-view.js';

//@ presenters
import PointPresenter from './point-presenter';
import NewPointPresenter from './new-point-presenter.js';

import { SortType, UpdateType, UserAction, FilterType, TimeLimit } from '../const';
import { filter } from '../utils/filter.js';
// $======================== MainPresenter ========================$ //

export default class MainPresenter {
  #pointsContainer = null;

  #pointsModel = null;
  #filtersModel = null;

  #sortComponent = null;
  #noPointsComponent = null;
  #pointsListComponent = new PointsListView();
  #loadingComponent = new LoadingView();
  #failedLoadComponent = new FailedLoadView();

  #pointPresenters = new Map();
  #newPointPresenter = null;

  #currentSortType = SortType.DAY;
  #filterType = null;

  #isLoading = true;

  #uiBlocker = new UiBlocker({
    lowerLimit: TimeLimit.LOWER_LIMIT,
    upperLimit: TimeLimit.UPPER_LIMIT
  });

  // @------------ CONSTRUCTOR ------------@ //
  constructor({ pointsContainer, pointsModel, filtersModel, handleNewPointDestroy }) {
    this.#pointsContainer = pointsContainer;
    this.#pointsModel = pointsModel;
    this.#filtersModel = filtersModel;

    this.#pointsModel.addObserver(this.#handleModelEvent);
    this.#filtersModel.addObserver(this.#handleModelEvent);

    this.#newPointPresenter = new NewPointPresenter({
      pointsListComponent: this.#pointsListComponent.element,
      pointsModel: this.#pointsModel,
      handleDataChange: this.#handleViewAction,
      handleDestroy: handleNewPointDestroy,
    });
  }

  // @------------ GETTERS ------------@ //
  get points() {
    this.#filterType = this.#filtersModel.filter;
    const points = this.#pointsModel.points;

    const filteredPoints = filter[this.#filterType](points);

    switch (this.#currentSortType) {
      case SortType.DAY:
        return filteredPoints.sort(sortByDay);
      case SortType.TIME:
        return filteredPoints.sort(sortByTime);
      case SortType.PRICE:
        return filteredPoints.sort(sortByPrice);
      default: return filteredPoints;
    }
  }

  // @------------ RENDER ------------@ //
  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      pointsListComponent: this.#pointsListComponent,
      pointsModel: this.#pointsModel,

      handleDataChange: this.#handleViewAction,
      handleModeChange: this.#handleModeChange,
    });

    pointPresenter.init(point);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #renderPoints() {
    if (this.points.length === 0) {
      this.#renderNoPoints();
      return;
    }

    this.points.forEach((point) => {
      this.#renderPoint(point);
    });
  }

  #renderNoPoints() {
    this.#noPointsComponent = new NoPointsView({
      filterType: this.#filterType
    });
    render(this.#noPointsComponent, this.#pointsContainer);
    remove(this.#sortComponent);
  }

  #renderPointsList() {
    if (this.#isLoading) {
      this.#renderLoading();
      return;
    }
    if (!this.#pointsModel.isLoaded) {
      this.#renderFailedLoad();
      return;
    }
    this.#renderSort();

    render(this.#pointsListComponent, this.#pointsContainer);
    this.#renderPoints(this.points);
  }

  #renderSort() {
    this.#sortComponent = new SortView({
      handleSortTypeChange: this.#handleSortTypeChange,
      currentSortType: this.#currentSortType,
    });

    render(this.#sortComponent, this.#pointsContainer);
  }

  #renderLoading() {
    render(this.#loadingComponent, this.#pointsContainer);
  }

  #renderFailedLoad() {
    render(this.#failedLoadComponent, this.#pointsContainer);
  }

  // @------------ CLEAR/DELETE ------------@ //
  #removeSort() {
    remove(this.#sortComponent);
  }

  #clearPointsList({ resetSortType = false } = {}) {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
    this.#newPointPresenter.destroy();

    this.#removeSort();

    if (resetSortType) {
      this.#currentSortType = SortType.DAY;
    }
    if (this.#noPointsComponent) {
      remove(this.#noPointsComponent);
    }
    if (!this.#isLoading) {
      remove(this.#loadingComponent);
    }
  }

  // @------------ INIT ------------@ //
  init() {
    this.#renderPointsList();
  }

  createPoint() {
    this.#currentSortType = SortType.DAY;
    this.#filtersModel.setFilter(UpdateType.MAJOR, FilterType.EVERYTHING);
    this.#newPointPresenter.init();
    remove(this.#noPointsComponent);
  }

  cancelNewPointCreation() {
    if (this.#pointsModel.points.length === 0) {
      this.#renderNoPoints();
    }
  }

  // @------------ HANDLERS ------------@ //
  #handleModeChange = () => {
    this.#newPointPresenter.destroy();
    this.#pointPresenters.forEach((pointPresenter) => pointPresenter.resetView());
  };

  #handleSortTypeChange = (sortType) => {
    if (
      this.#currentSortType === sortType
      || (sortType === SortType.EVENT || sortType === SortType.OFFERS)
    ) {
      return;
    }

    this.#currentSortType = sortType;

    this.#removeSort();
    this.#renderSort();

    this.#clearPointsList();
    this.#renderPointsList();
  };

  #handleViewAction = async (actionType, updateType, update) => {
    this.#uiBlocker.block();

    switch (actionType) {
      case UserAction.UPDATE_POINT:
        this.#pointPresenters.get(update.id).setSaving();
        try {
          await this.#pointsModel.updatePoint(updateType, update);
        } catch (error) {
          this.#pointPresenters.get(update.id).setAborting();
        }
        break;
      case UserAction.ADD_POINT:
        this.#newPointPresenter.setSaving();
        try {
          await this.#pointsModel.addPoint(updateType, update);
        } catch (error) {
          this.#newPointPresenter.setAborting();
        }
        break;
      case UserAction.DELETE_POINT:
        this.#pointPresenters.get(update.id).setDeleting();
        try {
          await this.#pointsModel.deletePoint(updateType, update);
        } catch (error) {
          this.#pointPresenters.get(update.id).setAborting();
        }
        break;
    }
    this.#uiBlocker.unblock();
  };

  #handleModelEvent = (updateType, data) => {
    switch (updateType) {
      case UpdateType.PATCH:
        this.#pointPresenters.get(data.id).init(data);
        break;
      case UpdateType.MINOR:
        this.#clearPointsList();
        this.#renderPointsList();
        break;
      case UpdateType.MAJOR:
        this.#clearPointsList({ resetSortType: true });
        this.#renderPointsList();
        break;
      case UpdateType.INIT:
        this.#isLoading = false;
        remove(this.#loadingComponent);
        this.#renderPointsList();
        break;
    }
  };
}
