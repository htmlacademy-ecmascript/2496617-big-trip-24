import { render, remove } from '../framework/render';

//@ utils
import { sortByDay, sortByTime, sortByPrice } from '../utils/point';

//@ views
import PointsListView from '../view/points-list-view';
import SortView from '../view/sort-view';
import NoPointsView from '../view/no-points-view';

import PointPresenter from './point-presenter';
import { SortType, UpdateType, UserAction } from '../const';

// $======================== MainPresenter ========================$ //

export default class MainPresenter {
  #pointsContainer = null;
  #filtersContainer = null;

  #pointsModel = null;
  #offersModel = null;
  #destinationsModel = null;


  #sortComponent = null;
  #pointsListComponent = new PointsListView();

  #pointPresenters = new Map();

  #currentSortType = SortType.DAY;


  constructor({ pointsContainer, filtersContainer, pointsModel, offersModel, destinationsModel }) {
    this.#pointsContainer = pointsContainer;
    this.#filtersContainer = filtersContainer;
    this.#pointsModel = pointsModel;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;

    this.#pointsModel.addObserver(this.#handleModelEvent);
  }


  get points() {
    switch (this.#currentSortType) {
      case SortType.DAY:
        return [...this.#pointsModel.points].sort(sortByDay);
      case SortType.TIME:
        return [...this.#pointsModel.points].sort(sortByTime);
      case SortType.PRICE:
        return [...this.#pointsModel.points].sort(sortByPrice);
    }

    return this.#pointsModel.points;
  }


  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      pointsListComponent: this.#pointsListComponent,

      offersModel: this.#offersModel,
      destinationsModel: this.#destinationsModel,

      handleDataChange: this.#handleViewAction,
      handleModeChange: this.#handleModeChange,
    });

    pointPresenter.init(point);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #renderPoints(points) {
    if (points.length === 0) {
      this.#renderNoPoints();
      return;
    }

    points.forEach((point) => {
      this.#renderPoint(point);
    });
  }

  #renderNoPoints() {
    render(new NoPointsView(), this.#pointsContainer);
  }

  #renderPointsList() {
    render(this.#pointsListComponent, this.#pointsContainer);
    this.#renderPoints(this.points);
  }

  #clearPointsList({ resetSortType = false } = {}) {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();


    if (resetSortType) {
      this.#currentSortType = SortType.DAY;
    }
  }


  // @------------ сортировка ------------@ //
  #renderSort() {
    this.#sortComponent = new SortView({
      handleSortTypeChange: this.#handleSortTypeChange,
      currentSortType: this.#currentSortType,
    });

    render(this.#sortComponent, this.#pointsContainer);
  }

  #removeSort() {
    remove(this.#sortComponent);
  }


  // @------------ инициализация ------------@ //
  init() {
    this.#renderSort();
    this.#renderPointsList();
  }


  // @------------ обработчики ------------@ //

  #handleModeChange = () => {
    this.#pointPresenters.forEach((pointPresenter) => {
      pointPresenter.resetView();
    });
  };

  #handleSortTypeChange = (sortType) => {
    if (
      this.#currentSortType === sortType
      && (sortType === SortType.EVENT || sortType === SortType.OFFERS)
    ) {
      return;
    }

    this.#currentSortType = sortType;

    this.#removeSort();
    this.#renderSort();

    this.#clearPointsList();
    this.#renderPointsList();
  };

  #handleViewAction = (actionType, updateType, update) => {
    switch (actionType) {
      case UserAction.UPDATE_POINT:
        this.#pointsModel.updatePoint(updateType, update);
        break;
      case UserAction.ADD_POINT:
        this.#pointsModel.addPoint(updateType, update);
        break;
      case UserAction.DELETE_POINT:
        this.#pointsModel.deletePoint(updateType, update);
        break;
    }
  };

  #handleModelEvent = (updateType, data) => {
    switch (updateType) {
      case UpdateType.PATCH:
        this.#pointPresenters.get(data.id).init(data);
        break;
      case (UpdateType.MINOR):
        this.#clearPointsList();
        this.#renderPointsList();
        break;
      case (UpdateType.MAJOR):
        this.#clearPointsList({ resetSortType: true });
        this.#renderPointsList();
    }
  };
}
