import { replace, render } from '../framework/render';
import { isEscapeKey } from '../utils/common';
import PointView from '../view/point-view';
import EditFormView from '../view/edit-form-view';

// $======================== PointPresenter ========================$ //

export default class PointPresenter {
  #pointsListComponent = null;
  #pointComponent = null;
  #editFormComponent = null;

  #point = null;
  #destination = null;
  #offers = [];

  #pointDestination = null;
  #allOffers = [];
  #allDestinations = [];

  constructor({ pointsListComponent, offers, destination, allOffers, pointDestination, allDestinations }) {
    this.#pointsListComponent = pointsListComponent.element;
    this.#offers = offers;
    this.#destination = destination;
    this.#allOffers = allOffers;
    this.#pointDestination = pointDestination;
    this.#allDestinations = allDestinations;
  }

  #escKeyDownHandler = (e) => {
    if (isEscapeKey(e)) {
      e.preventDefault();
      this.#replaceFormToPoint();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };

  #handleEditClick = () => {
    this.#replacePointToForm();
    document.addEventListener('keydown', this.#escKeyDownHandler);
  };

  #handleFormSubmit = () => {
    this.#replaceFormToPoint();
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  };

  #replacePointToForm() {
    replace(this.#editFormComponent, this.#pointComponent);
  }

  #replaceFormToPoint() {
    replace(this.#pointComponent, this.#editFormComponent);
  }

  init({ point, offers, destination }) {
    this.#point = point;
    this.#offers = offers;
    this.#destination = destination;

    this.#pointComponent = new PointView({
      point: this.#point,
      offers: this.#offers,
      destination: this.#destination,

      onEditClick: this.#handleEditClick,
    });

    this.#editFormComponent = new EditFormView({
      point: this.#point,
      allOffers: this.#allOffers,
      pointDestination: this.#pointDestination,
      allDestinations: this.#allDestinations,

      onFormSubmit: this.#handleFormSubmit,
    });

    render(this.#pointComponent, this.#pointsListComponent);
  }
}
