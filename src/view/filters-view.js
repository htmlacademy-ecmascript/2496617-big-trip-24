import AbstractView from '../framework/view/abstract-view';

// $======================== FiltersView ========================$ //

const createFilterItemTemplate = (filter, currentFilter) => {
  const { type, count } = filter;
  return `
    <div class="trip-filters__filter">
      <input id="filter-${type}"
        class="trip-filters__filter-input visually-hidden"
        type="radio"
        name="trip-filter"
        value="${type}"
        ${type === currentFilter ? 'checked' : ''}
        ${count === 0 ? 'disabled' : ''}
      />
        <label class="trip-filters__filter-label" for="filter-${type}" >
          ${type}
        </label>
    </div>
  `;
};

const createFiltersTemplate = (filters, currentFilter) => `
  <div class="trip-main__trip-controls  trip-controls">
    <div class="trip-controls__filters">
      <h2 class="visually-hidden">Filter events</h2>
      <form class="trip-filters" action="#" method="get">
        ${filters.map((filter) => createFilterItemTemplate(filter, currentFilter)).join('')}
        <button class="visually-hidden" type="submit">
          Accept filter
        </button>
      </form>
    </div>
  </div>
`;

export default class FiltersView extends AbstractView {
  #filters = [];
  #currentFilter = null;
  #handleFilterTypeChange = null;

  constructor({ filters, currentFilterType, handleFilterTypeChange }) {
    super();
    this.#filters = filters;
    this.#currentFilter = currentFilterType;
    this.#handleFilterTypeChange = handleFilterTypeChange;

    this.element.addEventListener('click', this.#onFilterTypeChange);
  }

  get template() {
    return createFiltersTemplate(this.#filters, this.#currentFilter);
  }

  #onFilterTypeChange = (evt) => {
    evt.preventDefault();
    if (evt.target.tagName !== 'LABEL') {
      return;
    }

    const targetParentElement = evt.target.closest('label').parentElement;
    const nearestInput = targetParentElement.querySelector('input');

    if (!nearestInput.disabled) {
      this.#handleFilterTypeChange(nearestInput.value);
    }
  };
}
