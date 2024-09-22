import { SORT_TYPES } from '../const';
import AbstractView from '../framework/view/abstract-view';

// $======================== SortView ========================$ //

const createSortItemTemplate = (sortType) => /*html*/`
  <div class="trip-sort__item  trip-sort__item--${sortType}">
    <input
      id="sort-${sortType}"
      class="trip-sort__input  visually-hidden"
      type="radio"
      name="trip-sort"
      value="sort-${sortType}"
      ${sortType === 'offers' ? 'disabled' : ''}
      data-sort-type="${sortType}"
    >
    <label class="trip-sort__btn" for="sort-${sortType}">${sortType}</label>
  </div>
`;

const createSortTemplate = () => /*html*/`
  <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    ${SORT_TYPES.map((sortType) => createSortItemTemplate(sortType)).join('')}
  </form>
`;

export default class SortView extends AbstractView {
  get template() {
    return createSortTemplate();
  }
}
