import { createElement } from '../render';
import { FILTER_TYPES } from '../const';

// $======================== FiltersView ========================$ //

const createFilterItemTemplate = (filterType) => /*html*/`
  <div class="trip-filters__filter">
    <input id="filter-${filterType}" class="trip-filters__filter-input visually-hidden" type="radio" name="trip-filter" value="${filterType}" />
      <label class="trip-filters__filter-label" for="filter-${filterType}" >
        ${filterType}
      </label>
  </div>
`;

const createFiltersTemplate = () => /*html*/`
    <form class="trip-filters" action="#" method="get">
      ${FILTER_TYPES.map((filterType) => createFilterItemTemplate(filterType)).join('')}
      <button class="visually-hidden" type="submit">
        Accept filter
      </button>
    </form>
`;

export default class FiltersView {
  getTemplate() {
    return createFiltersTemplate();
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
