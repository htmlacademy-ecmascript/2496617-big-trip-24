import { replace, render, remove } from '../framework/render';
import { isEscapeKey } from '../utils/common';
import { Mode, UserAction, UpdateType } from '../const';
import PointView from '../view/point-view';
import EditFormView from '../view/edit-form-view';

// $======================== PointPresenter ========================$ //

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

  // @------------ CONSTRUCTOR ------------@ //
  constructor({ pointsListComponent, offersModel, destinationsModel, handleDataChange, handleModeChange }) {
    this.#pointsListComponent = pointsListComponent;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;

    this.#handleDataChange = handleDataChange;
    this.#handleModeChange = handleModeChange;
  }


  // @------------ REPLACE ------------@ //
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


  // @------------ DESTROY/RESET ------------@ //
  destroy() {
    remove(this.#pointComponent);
    remove(this.#editFormComponent);
  }

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#replaceFormToPoint();
    }
  }

  #removeEscKeydownEventListener() {
    document.removeEventListener('keydown', this.#handleEscKeyDown);
  }

  // @------------ SET FLAGS ------------@ //
  setSaving() {
    if (this.#mode === Mode.EDITING) {
      this.#editFormComponent.updateElement({
        isDisabled: true,
        isSaving: true,
      });
    }
  }

  setDeleting() {
    if (this.#mode === Mode.EDITING) {
      this.#editFormComponent.updateElement({
        isDisabled: true,
        isDeleting: true,
      });
    }
  }

  setAborting() {
    if (this.#mode === Mode.DEFAULT) {
      this.#pointComponent.shake();
      return;
    }

    const resetFormState = () => {
      this.#editFormComponent.updateElement({
        isDisabled: false,
        isSaving: false,
        isDeleting: false,
      });
    };

    this.#editFormComponent.shake(resetFormState);
  }


  // @------------ INIT ------------@ //
  init(point) {
    this.#point = point;

    const prevPointComponent = this.#pointComponent;
    const prevEditFormComponent = this.#editFormComponent;


    //@ создание точки
    this.#pointComponent = new PointView({
      point: this.#point,
      allOffers: this.#offersModel.offers,
      allDestinations: this.#destinationsModel.destinations,

      handleEditClick: this.#handleEditClick,
      handleFavoriteClick: this.#handleFavoriteClick,
    });

    //@ создание формы
    this.#editFormComponent = new EditFormView({
      point: this.#point,
      allOffers: this.#offersModel.offers,
      allDestinations: this.#destinationsModel.destinations,

      handleFormSubmit: this.#handleFormSubmit,
      handleFormClose: this.#handleFormClose,
      handleDeleteClick: this.#handleDeleteClick,
      isNew: false,
    });

    if (prevPointComponent === null || prevEditFormComponent === null) {
      render(this.#pointComponent, this.#pointsListComponent.element);
      return;
    }

    //@ проверки режима
    if (this.#mode === Mode.DEFAULT) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#editFormComponent, prevEditFormComponent);
    }

    remove(prevPointComponent);
    remove(prevEditFormComponent);
  }


  // @------------ HANDLERS ------------@ //
  #handleEscKeyDown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      this.#editFormComponent.reset(this.#point);
      this.#replaceFormToPoint();
      this.#removeEscKeydownEventListener();
    }
  };

  #handleEditClick = () => {
    this.#replacePointToForm();
    document.addEventListener('keydown', this.#handleEscKeyDown);
  };

  #handleFormSubmit = (update) => {
    this.#handleDataChange(
      UserAction.UPDATE_POINT,
      UpdateType.MINOR,
      update
    );
    //? this.#replaceFormToPoint();
    this.#removeEscKeydownEventListener();
  };

  #handleFormClose = () => {
    this.#editFormComponent.reset(this.#point);
    this.#replaceFormToPoint();
    this.#removeEscKeydownEventListener();
  };

  #handleFavoriteClick = () => {
    this.#handleDataChange(
      UserAction.UPDATE_POINT,
      UpdateType.MINOR,
      { ...this.#point, isFavorite: !this.#point.isFavorite }
    );
  };

  #handleDeleteClick = (point) => {
    this.#handleDataChange(
      UserAction.DELETE_POINT,
      UpdateType.MINOR,
      point
    );
  };
}
