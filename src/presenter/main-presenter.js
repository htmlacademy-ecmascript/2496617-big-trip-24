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

  #renderPoint({ point, offers, destination }) {
    const pointPresenter = new PointPresenter({
      pointsListComponent: this.#pointsListComponent,
      offers: offers,
      destination: destination,
      allOffers: this.#offersModel.getOffersByType(point.type),
      pointDestination: this.#destinationsModel.getDestinationById(point.destination),
      allDestinations: this.#destinationsModel.destinations,
      handleDataChange: this.#handlePointChange,
    });

    pointPresenter.init(point, offers, destination);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #renderPoints() {
    this.#renderSort();

    this.#renderPointsList();

    if (this.#points.length === 0) {
      this.#renderNoPoints();
      return;
    }

    this.#points.forEach((point) => {
      this.#renderPoint({
        point: point,
        offers: [...this.#offersModel.getOffersById(point.type, point.offers)],
        destination: this.#destinationsModel.getDestinationById(point.destination)
      });
    });
  }

  #renderSort() {
    render(this.#sortComponent, this.#pointsContainer);
  }

  #renderNoPoints() {
    render(new NoPointsView(), this.#pointsContainer);
  }

  #renderPointsList() {
    render(this.#pointsListComponent, this.#pointsContainer);
  }

  #handlePointChange = (updatedPoint) => {
    this.#points = updateItem(this.#points, updatedPoint);
    //? сюда же в init() нужно передавать ещё и соответствующие оферы и направления:
    this.#pointPresenters.get(updatedPoint.id).init(
      updatedPoint,
      [...this.#offersModel.getOffersById(updatedPoint.type, updatedPoint.offers)],
      this.#destinationsModel.getDestinationById(updatedPoint.destination)
    );
  };

  init() {
    this.#points = [...this.#pointsModel.points];

    const filters = generateFilter(this.#points);
    render(new FiltersView({ filters }), this.#filtersContainer);

    this.#renderPoints();
  }

}
