import { render } from '../framework/render';
import { updateItem } from '../utils/common';
import { sortByDay, sortByTime, sortByPrice } from '../utils/point';

import DestinationsModel from '../model/destinations-model';
import OffersModel from '../model/offers-model';

import PointsListView from '../view/points-list-view';
import SortView from '../view/sort-view';
import NoPointsView from '../view/no-points-view';

import PointPresenter from './point-presenter';
import { SortType } from '../const';

// $====================== PointsListPresenter ======================$ //


export default class PointsListPresenter {
  #pointsContainer = null;
  #offersModel = new OffersModel();
  #destinationsModel = new DestinationsModel();

  #sortComponent = null;
  #pointsListComponent = new PointsListView();

  #points = [];

  #pointPresenters = new Map();

  #currentSortType = SortType.DAY;
  #sourcedListPoints = [];

  constructor({ pointsContainer, points }) {
    this.#pointsContainer = pointsContainer;
    this.#points = points;
  }

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      pointsListComponent: this.#pointsListComponent,

      offersModel: this.#offersModel,
      destinationsModel: this.#destinationsModel,

      handleDataChange: this.#handlePointChange,
      handleModeChange: this.#handleModeChange,
    });

    pointPresenter.init(point);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #renderPoints() {
    if (this.#points.length === 0) {
      this.#renderNoPoints();
      return;
    }

    this.#points.forEach((point) => {
      this.#renderPoint(point);
    });
  }

  #renderNoPoints() {
    render(new NoPointsView(), this.#pointsContainer);
  }

  #renderPointsList() {
    render(this.#pointsListComponent, this.#pointsContainer);
    this.#renderPoints();
  }

  #clearPointsList() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
  }

  #renderSort() {
    this.#sortComponent = new SortView({
      handleSortTypeChange: this.#handleSortTypeChange
    });

    render(this.#sortComponent, this.#pointsContainer);
  }

  #sortPoints(sortType) {
    switch (sortType) {
      case SortType.DAY:
        this.#points.sort(sortByDay);
        break;
      case SortType.EVENT:
        return;
      case SortType.TIME:
        this.#points.sort(sortByTime);
        break;
      case SortType.PRICE:
        this.#points.sort(sortByPrice);
        break;
      case SortType.OFFERS:
        return;
      default:
        this.#points = [...this.#sourcedListPoints];
    }
    this.#currentSortType = sortType;
  }

  // @------------ обработчики ------------@ //
  #handlePointChange = (updatedPoint) => {
    this.#points = updateItem(this.#points, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint);
  };

  #handleModeChange = () => {
    this.#pointPresenters.forEach((pointPresenter) => {
      pointPresenter.resetView();
    });
  };

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }
    if (sortType === SortType.EVENT || sortType === SortType.OFFERS) {
      return;
    }

    this.#sortPoints(sortType);

    this.#clearPointsList();
    this.#renderPointsList();
  };

  //@ инициализация
  init() {
    this.#sourcedListPoints = [...this.#points];
    this.#renderSort();
    this.#sortPoints(SortType.DAY);
    this.#renderPointsList();
  }

}
