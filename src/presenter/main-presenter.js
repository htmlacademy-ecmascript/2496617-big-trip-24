import PointsModel from '../model/points-model';
import PointsListPresenter from './points-list-presenter';
import FiltersPresenter from './filters-presenter';

// $======================== MainPresenter ========================$ //

export default class MainPresenter {
  #pointsContainer = null;
  #filtersContainer = null;

  #filtersPresenter = null;
  #pointsListPresenter = null;

  #pointsModel = new PointsModel();
  #points = [];

  constructor({ pointsContainer, filtersContainer }) {
    this.#pointsContainer = pointsContainer;
    this.#filtersContainer = filtersContainer;
  }

  init() {
    this.#points = [...this.#pointsModel.points];

    this.#filtersPresenter = new FiltersPresenter({
      filtersContainer: this.#filtersContainer,
      points: this.#points,
    });

    this.#pointsListPresenter = new PointsListPresenter({
      pointsContainer: this.#pointsContainer,
      points: this.#points,
    });

    this.#filtersPresenter.init();
    this.#pointsListPresenter.init();
  }
}
