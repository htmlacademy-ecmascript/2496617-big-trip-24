import { UpdateType, UserAction } from '../const';
import { remove, render } from '../framework/render';
import { isEscapeKey } from '../utils/common';
import EditFormView from '../view/edit-form-view';
import { nanoid } from 'nanoid';

// $======================== NewPointPresenter ========================$ //

export default class NewPointPresenter {
  #pointsListComponent = null;
  #editFormComponent = null;

  #handleDestroy = null;
  #handleDataChange = null;

  constructor({ pointsListComponent, handleDataChange, handleDestroy }) {
    this.#pointsListComponent = pointsListComponent;
    this.#handleDataChange = handleDataChange;
    this.#handleDestroy = handleDestroy;
  }

  init() {
    if (this.#editFormComponent !== null) {
      return;
    }

    this.#editFormComponent = new EditFormView({
      handleFormSubmit: this.#handleFormSubmit,
      handleDeleteClick: this.#handleDeleteClick,
    });

    render(this.#editFormComponent, this.#pointsListComponent);

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

  #handleFormSubmit = (point) => {
    this.#handleDataChange(
      UserAction.ADD_POINT,
      UpdateType.MINOR,
      { id: nanoid(), ...point }
    );
    this.destroy();
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
