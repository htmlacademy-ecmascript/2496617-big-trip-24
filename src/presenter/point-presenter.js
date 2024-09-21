import { replace, render, remove } from '../framework/render';
import { isEscapeKey } from '../utils/common';
import PointView from '../view/point-view';
import EditFormView from '../view/edit-form-view';

// $======================== PointPresenter ========================$ //

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING'
};

export default class PointPresenter {
  #pointsListComponent = null;
  #pointComponent = null;
  #editFormComponent = null;

  #point = null;
  #mode = Mode.DEFAULT;

  #offersModel = null;
  #destinationsModel = null;

  #handleDataChange = null;
  #handleModeChange = null;

  constructor({ pointsListComponent, offersModel, destinationsModel, handleDataChange, handleModeChange }) {
    this.#pointsListComponent = pointsListComponent.element;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;

    this.#handleDataChange = handleDataChange;
    this.#handleModeChange = handleModeChange;
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

    document.addEventListener('keydown', this.#handleEscKeyDown);
    this.#handleModeChange();
    this.#mode = Mode.EDITING;
  }

  #replaceFormToPoint() {
    replace(this.#pointComponent, this.#editFormComponent);

    document.removeEventListener('keydown', this.#handleEscKeyDown);
    this.#mode = Mode.DEFAULT;
  }

  //@ удаление точки
  destroy() {
    remove(this.#pointComponent);
    remove(this.#editFormComponent);
  }

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#replaceFormToPoint();
    }
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

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#editFormComponent, prevEditFormComponent);
    }

    remove(prevPointComponent);
    remove(prevEditFormComponent);

  }
}
