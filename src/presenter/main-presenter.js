import { render } from '../framework/render';
import { generateFilter } from '../mock/mock-filter';
import FiltersView from '../view/filters-view';
import PointsListView from '../view/points-list-view';
import SortView from '../view/sort-view';
import NoPointsView from '../view/no-points-view';
import PointPresenter from './point-presenter';
import { updateItem } from '../utils/common';

// $======================== MainPresenter ========================$ //

export default class MainPresenter {
  #pointsContainer = null;
  #filtersContainer = null;

  #pointsModel = null;
  #offersModel = null;
  #destinationsModel = null;

  #points = [];

  #pointsListComponent = new PointsListView();
  #sortComponent = new SortView();

  #pointPresenters = new Map();

  constructor({ pointsContainer, filtersContainer, pointsModel, destinationsModel, offersModel }) {
    this.#pointsContainer = pointsContainer;
    this.#filtersContainer = filtersContainer;

    this.#pointsModel = pointsModel;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
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

  #renderPointsList() {
    render(this.#pointsListComponent, this.#pointsContainer);
    this.#renderPoints();
  }

  #renderFilters() {
    const filters = generateFilter(this.#points);
    render(new FiltersView({ filters }), this.#filtersContainer);
  }

  #renderSort() {
    render(this.#sortComponent, this.#pointsContainer);
  }

  #renderNoPoints() {
    render(new NoPointsView(), this.#pointsContainer);
  }

  #handlePointChange = (updatedPoint) => {
    this.#points = updateItem(this.#points, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint);
  };

  #handleModeChange = () => {
    this.#pointPresenters.forEach((pointPresenter) => {
      pointPresenter.resetView();
    });
  };

  init() {
    this.#points = [...this.#pointsModel.points];

    this.#renderFilters();
    this.#renderSort();
    this.#renderPointsList();
  }

}
