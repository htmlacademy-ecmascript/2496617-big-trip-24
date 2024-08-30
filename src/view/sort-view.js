import { createElement } from '../render';

// $======================== SortView ========================$ //

const SORT_ITEMS = ['day', 'event', 'time', 'price', 'offers'];

const createSortTemplate = () => `
  <form class="trip-events__trip-sort  trip-sort" action="#" method="get">

    ${SORT_ITEMS.map((sortItem) => `
        <div class="trip-sort__item  trip-sort__item--day">
          <input id="sort-${sortItem}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sortItem}">
          <label class="trip-sort__btn" for="sort-${sortItem}">${sortItem}</label>
        </div>
      `).join('')}

  </form>
`;

export default class SortView {
  getTemplate() {
    return createSortTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
