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

  #pointsModel = null;

  #handleDataChange = null;
  #handleModeChange = null;

  #isSaving;

  // @------------ CONSTRUCTOR ------------@ //
  constructor({ pointsListComponent, pointsModel, handleDataChange, handleModeChange }) {
    this.#pointsListComponent = pointsListComponent;
    this.#pointsModel = pointsModel;

    this.#handleDataChange = handleDataChange;
    this.#handleModeChange = handleModeChange;
  }

  // @------------ REPLACE ------------@ //
  #replacePointToForm() {
    replace(this.#editFormComponent, this.#pointComponent);

    this.#addEscKeydownEventListener();
    this.#handleModeChange();
    this.#mode = Mode.EDITING;
  }

  #replaceFormToPoint() {
    replace(this.#pointComponent, this.#editFormComponent);

    this.#removeEscKeydownEventListener();
    this.#mode = Mode.DEFAULT;
  }

  // @------------ DESTROY/RESET ------------@ //
  destroy() {
    remove(this.#pointComponent);
    remove(this.#editFormComponent);
  }

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#editFormComponent.reset(this.#point);
      this.#replaceFormToPoint();
    }
  }

  #removeEscKeydownEventListener() {
    document.removeEventListener('keydown', this.#handleEscKeyDown);
  }

  #addEscKeydownEventListener() {
    document.addEventListener('keydown', this.#handleEscKeyDown);
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
      this.#addEscKeydownEventListener();
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
      allOffers: this.#pointsModel.offers,
      allDestinations: this.#pointsModel.destinations,

      handleEditClick: this.#handleEditClick,
      handleFavoriteClick: this.#handleFavoriteClick,
    });

    //@ создание формы
    this.#editFormComponent = new EditFormView({
      point: this.#point,
      allOffers: this.#pointsModel.offers,
      allDestinations: this.#pointsModel.destinations,

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
      this.#editFormComponent.reset(this.#point);
      this.#replaceFormToPoint();
    }
  };

  #handleEditClick = () => {
    this.#replacePointToForm();
  };

  #handleFormSubmit = (update) => {
    this.#handleDataChange(
      UserAction.UPDATE_POINT,
      UpdateType.MINOR,
      update
    );
    this.#removeEscKeydownEventListener();
  };

  #handleFormClose = () => {
    this.#editFormComponent.reset(this.#point);
    this.#replaceFormToPoint();
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
    this.#removeEscKeydownEventListener();
  };
}
