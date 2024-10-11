import { UpdateType, UserAction } from '../const';
import { remove, render, RenderPosition } from '../framework/render';
import { isEscapeKey } from '../utils/common';
import EditFormView from '../view/edit-form-view';

// $======================== NewPointPresenter ========================$ //

export default class NewPointPresenter {
  #pointsListComponent = null;
  #editFormComponent = null;

  #destinationsModel = null;
  #offersModel = null;

  #handleDestroy = null;
  #handleDataChange = null;

  // @------------ CONSTRUCTOR ------------@ //
  constructor({ pointsListComponent, handleDataChange, handleDestroy, destinationsModel, offersModel }) {
    this.#pointsListComponent = pointsListComponent;
    this.#handleDataChange = handleDataChange;
    this.#handleDestroy = handleDestroy;

    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;
  }

  // @------------ INIT ------------@ //
  init() {
    if (this.#editFormComponent !== null) {
      return;
    }

    this.#editFormComponent = new EditFormView({
      handleFormSubmit: this.#handleFormSubmit,
      handleDeleteClick: this.#handleDeleteClick,
      handleFormClose: this.#handleDeleteClick,

      allDestinations: this.#destinationsModel.destinations,
      allOffers: this.#offersModel.offers,

      isNew: true,
    });


    render(this.#editFormComponent, this.#pointsListComponent, RenderPosition.AFTERBEGIN);

    document.addEventListener('keydown', this.#onEscKeydown);
  }

  destroy() {
    if (this.#editFormComponent === null) {
      return;
    }

    this.#handleDestroy();
    remove(this.#editFormComponent);
    this.#editFormComponent = null;
    document.removeEventListener('keydown', this.#onEscKeydown);
  }

  setSaving() {
    this.#editFormComponent.updateElement({
      isDisabled: true,
      isSaving: true,
    });
  }

  setAborting() {
    const resetFormState = () => {
      this.#editFormComponent.updateElement({
        isDisabled: false,
        isSaving: false,
        isDeleting: false,
      });
    };
    this.#editFormComponent.shake(resetFormState);
  }

  // @------------ HANDLERS ------------@ //
  #handleFormSubmit = (point) => {
    this.#handleDataChange(
      UserAction.ADD_POINT,
      UpdateType.MINOR,
      point
    );
    // this.destroy();
  };

  #handleDeleteClick = () => {
    this.destroy();
  };

  #onEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      this.destroy();
    }
  };
}
