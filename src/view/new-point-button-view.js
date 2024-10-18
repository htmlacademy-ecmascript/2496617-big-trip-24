import AbstractView from '../framework/view/abstract-view';

// $======================== NewPointButtonView ========================$ //

const createNewPointButtonTemplate = (isLoaded) => `
  <button
    class="trip-main__event-add-btn  btn  btn--big  btn--yellow"
    type="button"
    ${!isLoaded ? 'disabled' : ''}
  >
    New event
  </button>
`;

export default class NewPointButtonView extends AbstractView {
  #handleNewPointButtonClick = null;
  #isLoaded = null;

  constructor({ handleNewPointButtonClick, isLoaded }) {
    super();
    this.#isLoaded = isLoaded;
    this.#handleNewPointButtonClick = handleNewPointButtonClick;
    this.element.addEventListener('click', this.#onClick);
  }

  get template() {
    return createNewPointButtonTemplate(this.#isLoaded);
  }

  #onClick = (evt) => {
    evt.preventDefault();
    this.#handleNewPointButtonClick();
  };
}
