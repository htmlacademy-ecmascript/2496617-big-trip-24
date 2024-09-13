import { render, replace } from '../framework/render';
import EditFormView from '../view/edit-form-view';
import FiltersView from '../view/filters-view';
import PointView from '../view/point-view';
import PointsListView from '../view/points-list-view';
import SortView from '../view/sort-view';
import { isEscapeKey } from '../utils/common';

// $======================== MainPresenter ========================$ //

export default class MainPresenter {
  #pointsContainer = null;
  #filtersContainer = null;
  #pointsModel = null;
  #destinationsModel = null;
  #offersModel = null;

  constructor({ pointsContainer, filtersContainer, pointsModel, destinationsModel, offersModel }) {
    this.#pointsContainer = pointsContainer;
    this.#filtersContainer = filtersContainer;
    this.#pointsModel = pointsModel;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
  }

  #pointsListElement = new PointsListView();

  #renderPoint({ point, offers, destination }) {

    const escKeyDownHandler = (e) => {
      if (isEscapeKey) {
        e.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const pointComponent = new PointView({
      point,
      offers,
      destination,
      onEditClick: () => {
        replacePointToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });

    const editFormComponent = new EditFormView({
      point: point,
      allOffers: this.#offersModel.getOffersByType(point.type),
      pointDestination: this.#destinationsModel.getDestinationById(point.destination),
      allDestinations: this.#destinationsModel.destinations,

      onFormSubmit: () => {
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    });


    function replacePointToForm() {
      replace(editFormComponent, pointComponent);
    }
    function replaceFormToPoint() {
      replace(pointComponent, editFormComponent);
    }

    render(pointComponent, this.#pointsListElement.element);
  }

  #renderBoard() {
    render(new FiltersView(), this.#filtersContainer);
    render(new SortView(), this.#pointsContainer);

    render(this.#pointsListElement, this.#pointsContainer);

    this.points.forEach((pointItem) => {
      this.#renderPoint({
        point: pointItem,
        offers: [...this.#offersModel.getOffersById(pointItem.type, pointItem.offers)],
        destination: this.#destinationsModel.getDestinationById(pointItem.destination)
      });
    });
  }

  init() {
    this.points = [...this.#pointsModel.points];

    this.#renderBoard();
  }
}
