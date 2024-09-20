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

  #offersModel = null;
  #destinationsModel = null;

  #handleDataChange = null;

  constructor({ pointsListComponent, offersModel, destinationsModel, handleDataChange }) {
    this.#pointsListComponent = pointsListComponent.element;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;

    this.#handleDataChange = handleDataChange;
  }

  // @------------ обработчики ------------@ //
  #handleEscKeyDown = (e) => {
    if (isEscapeKey(e)) {
      e.preventDefault();
      this.#replaceFormToPoint();
      document.removeEventListener('keydown', this.#handleEscKeyDown);
    }
  };

  #handleEditClick = () => {
    this.#replacePointToForm();
    document.addEventListener('keydown', this.#handleEscKeyDown);
  };

  #handleFormSubmit = () => {
    this.#replaceFormToPoint();
    document.removeEventListener('keydown', this.#handleEscKeyDown);
  };

  #handleFavoriteClick = () => {
    this.#handleDataChange({ ...this.#point, isFavorite: !this.#point.isFavorite });
  };

  //@ функции замены точки на форму и обратно
  #replacePointToForm() {
    replace(this.#editFormComponent, this.#pointComponent);
  }

  #replaceFormToPoint() {
    replace(this.#pointComponent, this.#editFormComponent);
  }

  //@ удаление точки
  destroy() {
    remove(this.#pointComponent);
    remove(this.#editFormComponent);
  }

  //@ инициализация
  init(point) {
    this.#point = point;

    const prevPointComponent = this.#pointComponent;
    const prevEditFormComponent = this.#editFormComponent;


    this.#pointComponent = new PointView({
      point: this.#point,
      offers: [...this.#offersModel.getOffersById(point.type, point.offers)],
      destination: this.#destinationsModel.getDestinationById(point.destination),

      handleEditClick: this.#handleEditClick,
      handleFavoriteClick: this.#handleFavoriteClick,
    });

    this.#editFormComponent = new EditFormView({
      point: this.#point,
      allOffers: this.#offersModel.getOffersByType(point.type),
      pointDestination: this.#destinationsModel.getDestinationById(point.destination),
      allDestinations: this.#destinationsModel.destinations,

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
