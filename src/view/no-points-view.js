import AbstractView from '../framework/view/abstract-view';
import { FilterType } from '../utils/filter';
// $======================== NoPointsView ========================$ //

const NoPointsTextType = {
  [FilterType.EVERYTHING]: 'Click «+ New event» to create your first event',
  [FilterType.FUTURE]: 'There are no future events now',
  [FilterType.PAST]: 'There are no past events now',
  [FilterType.PRESENT]: 'There are no present events now',
};


const createNoPointsTemplate = (filterType) => {
  const noPointTextValue = NoPointsTextType[filterType];
  return /*html*/`
    <p class="trip-events__msg">
      ${noPointTextValue}
    </p>`;
};


export default class NoPointsView extends AbstractView {
  #filterType = null;

  constructor({filterType}) {
    super();
    this.#filterType = filterType;
  }

  get template() {
    return createNoPointsTemplate(this.#filterType);
  }
}
