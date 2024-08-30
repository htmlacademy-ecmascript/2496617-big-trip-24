import { createElement } from '../render';

// $======================== FiltersView ========================$ //
const FILTERS = ['everything', 'future', 'present', 'past'];

const createFiltersTemplate = () => `
    <form class="trip-filters" action="#" method="get">

      ${FILTERS.map((filter) => `
          <div class="trip-filters__filter">
            <input id="filter-${filter}" class="trip-filters__filter-input visually-hidden" type="radio" name="trip-filter" value="${filter}" />
            <label class="trip-filters__filter-label" for="filter-${filter}" >
              ${filter}
            </label>
          </div>
        `).join('')}

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
