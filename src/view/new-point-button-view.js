import AbstractView from '../framework/view/abstract-view';

// $======================== NewPointButtonView ========================$ //

const createNewPointButtonTemplate = () => `
  <button
    class="trip-main__event-add-btn  btn  btn--big  btn--yellow"
    type="button"
  >
    New event
  </button>
`;

export default class NewPointButtonView extends AbstractView {
  #handleNewPointButtonClick = null;

  constructor({ handleNewPointButtonClick }) {
    super();
    this.#handleNewPointButtonClick = handleNewPointButtonClick;
    this.element.addEventListener('click', this.#onClick);
  }

  get template() {
    return createNewPointButtonTemplate();
  }

  #onClick = (evt) => {
    evt.preventDefault();
    this.#handleNewPointButtonClick();
  };
}
