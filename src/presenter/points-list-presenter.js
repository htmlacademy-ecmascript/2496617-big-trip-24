import { render } from '../framework/render';
import { updateItem } from '../utils/common';

import DestinationsModel from '../model/destinations-model';
import OffersModel from '../model/offers-model';

import PointsListView from '../view/points-list-view';
import SortView from '../view/sort-view';
import NoPointsView from '../view/no-points-view';

import PointPresenter from './point-presenter';

// $====================== PointsListPresenter ======================$ //


export default class PointsListPresenter {
  #pointsContainer = null;
  #offersModel = new OffersModel();
  #destinationsModel = new DestinationsModel();

  #sortComponent = new SortView();
  #pointsListComponent = new PointsListView();

  #points = [];

  #pointPresenters = new Map();

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

  #renderSort() {
    render(this.#sortComponent, this.#pointsContainer);
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

  //@ инициализация
  init() {
    this.#renderSort();
    this.#renderPointsList();
  }

}
