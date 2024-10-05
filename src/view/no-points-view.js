import AbstractView from '../framework/view/abstract-view';
import { NoPointsTextType } from '../const';

// $======================== NoPointsView ========================$ //

const createNoPointsTemplate = (filterType) => {
  const noPointTextValue = NoPointsTextType[filterType];
  return /*html*/`
    <p class="trip-events__msg">
      ${noPointTextValue}
    </p>`;
};


export default class NoPointsView extends AbstractView {
  #filterType = null;

  constructor({ filterType }) {
    super();
    this.#filterType = filterType;
  }

  get template() {
    return createNoPointsTemplate(this.#filterType);
  }
}
