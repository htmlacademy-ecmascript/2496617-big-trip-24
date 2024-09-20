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

  #handleDataChange = null;

  constructor({ pointsListComponent, offers, destination, allOffers, pointDestination, allDestinations, handleDataChange }) {
    this.#pointsListComponent = pointsListComponent.element;
    this.#offers = offers;
    this.#destination = destination;
    this.#allOffers = allOffers;
    this.#pointDestination = pointDestination;
    this.#allDestinations = allDestinations;

    this.#handleDataChange = handleDataChange;
  }

  //@ обработчик нажатия на esc
  #handleEscKeyDown = (e) => {
    if (isEscapeKey(e)) {
      e.preventDefault();
      this.#replaceFormToPoint();
      document.removeEventListener('keydown', this.#handleEscKeyDown);
    }
  };

  //@ обработчики редактирования
  #handleEditClick = () => {
    this.#replacePointToForm();
    document.addEventListener('keydown', this.#handleEscKeyDown);
  };

  #handleFormSubmit = () => {
    this.#replaceFormToPoint();
    document.removeEventListener('keydown', this.#handleEscKeyDown);
  };

  //@ функции замены точки на форму и обратно
  #replacePointToForm() {
    replace(this.#editFormComponent, this.#pointComponent);
  }

  #replaceFormToPoint() {
    replace(this.#pointComponent, this.#editFormComponent);
  }

  destroy() {
    remove(this.#pointComponent);
    remove(this.#editFormComponent);
  }

  #handleFavoriteClick = () => {
    this.#handleDataChange({ ...this.#point, isFavorite: !this.#point.isFavorite });
  };

  //@ инициализация
  init(point, offers, destination) {
    this.#point = point;
    this.#offers = offers;
    this.#destination = destination;

    const prevPointComponent = this.#pointComponent;
    const prevEditFormComponent = this.#editFormComponent;


    this.#pointComponent = new PointView({
      point: this.#point,
      offers: this.#offers,
      destination: this.#destination,

      handleEditClick: this.#handleEditClick,
      handleFavoriteClick: this.#handleFavoriteClick,
    });

    this.#editFormComponent = new EditFormView({
      point: this.#point,
      allOffers: this.#allOffers,
      pointDestination: this.#pointDestination,
      allDestinations: this.#allDestinations,

      handleFormSubmit: this.#handleFormSubmit,
    });

    if (prevPointComponent === null || prevEditFormComponent === null) {
      render(this.#pointComponent, this.#pointsListComponent);
      return;
    }

    if (this.#pointsListComponent.contains(prevPointComponent.element)) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#pointsListComponent.contains(prevEditFormComponent.element)) {
      replace(this.#editFormComponent, prevEditFormComponent);
    }

    remove(prevPointComponent);
    remove(prevEditFormComponent);

    render(this.#pointComponent, this.#pointsListComponent);
  }
}
