import AbstractView from '../framework/view/abstract-view';

// $======================== FiltersView ========================$ //

const createFilterItemTemplate = (filterItem) => {
  const { type, count } = filterItem;
  return /*html*/`
    <div class="trip-filters__filter">
      <input id="filter-${type}"
        class="trip-filters__filter-input visually-hidden"
        type="radio"
        name="trip-filter"
        value="${type}"
        ${type === 'everything' ? 'checked' : ''}
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
    ${filters.map((filterItem) => createFilterItemTemplate(filterItem)).join('')}
    <button class="visually-hidden" type="submit">
      Accept filter
    </button>
  </form>
`;

export default class FiltersView extends AbstractView {
  #filters = [];

  constructor({ filters }) {
    super();
    this.#filters = filters;
  }

  get template() {
    return createFiltersTemplate(this.#filters);
  }
}
