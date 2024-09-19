import { replace, render, remove } from '../framework/render';
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

  //@ обработчики редактирования
  #handleEditClick = () => {
    this.#replacePointToForm();
    document.addEventListener('keydown', this.#escKeyDownHandler);
  };

  #handleFormSubmit = () => {
    this.#replaceFormToPoint();
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  };

  //@ функции замены точки на форму и обратно
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

    const prevPointComponent = this.#pointComponent;
    const prevEditFormComponent = this.#editFormComponent;


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

    if (prevPointComponent === null || prevEditFormComponent === null) {
      render(this.#pointComponent, this.#pointsListComponent);
      return;
    }

    if (this.#pointsListComponent.contains(prevPointComponent.element)) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#pointsListComponent.contains(prevEditFormComponent)) {
      replace(this.#editFormComponent, prevEditFormComponent);
    }

    remove(prevPointComponent);
    remove(prevEditFormComponent);

    render(this.#pointComponent, this.#pointsListComponent);
  }
}
