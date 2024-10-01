import AbstractView from '../framework/view/abstract-view';

// $======================== FiltersView ========================$ //

const createFilterItemTemplate = (filter, currentFilterType) => {
  const { type, count } = filter;
  return /*html*/`
    <div class="trip-filters__filter">
      <input id="filter-${type}"
        class="trip-filters__filter-input visually-hidden"
        type="radio"
        name="trip-filter"
        value="${type}"
        ${type === currentFilterType ? 'checked' : ''}
        ${count === 0 ? 'disabled' : ''}
      />
        <label class="trip-filters__filter-label" for="filter-${type}" >
          ${type}
          (${count})
        </label>
    </div>
  `;
};

const createFiltersTemplate = (filters) => /*html*/`
  <form class="trip-filters" action="#" method="get">
    ${filters.map((filter) => createFilterItemTemplate(filter)).join('')}
    <button class="visually-hidden" type="submit">
      Accept filter
    </button>
  </form>
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
    return createFiltersTemplate(this.#filters);
  }

  #onFilterTypeChange = (evt) => {
    evt.preventDefault();
    this.#handleFilterTypeChange(evt.target.value);
  };
}
