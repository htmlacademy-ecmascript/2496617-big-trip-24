import AbstractView from '../framework/view/abstract-view';

// $======================== FiltersView ========================$ //

const createFilterItemTemplate = (filter, currentFilter) => {
  const { type, count } = filter;
  return /*html*/`
    <div class="trip-filters__filter">
      <input id="filter-${type}"
        class="trip-filters__filter-input visually-hidden"
        type="radio"
        name="trip-filter"
        value="${type}"
        data-filter-count="${count}"
        ${type === currentFilter ? 'checked' : ''}
        ${count === 0 ? 'disabled' : ''}
      />
        <label class="trip-filters__filter-label" for="filter-${type}" >
          ${type}
          (${count})
        </label>
    </div>
  `;
};

const createFiltersTemplate = (filters, currentFilter) => /*html*/`
  <form class="trip-filters" action="#" method="get">
    ${filters.map((filter) => createFilterItemTemplate(filter, currentFilter)).join('')}
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
    return createFiltersTemplate(this.#filters, this.#currentFilter);
  }

  #onFilterTypeChange = (evt) => {
    evt.preventDefault();
    if (evt.target.tagName !== 'LABEL') {
      return;
    }

    const targetParentElement = evt.target.closest('label').parentElement;
    const nearestInput = targetParentElement.querySelector('input');

    //? вот тут проверяю, что выбранный фильтр не 0
    if (Number(nearestInput.dataset.filterCount)) {
      this.#handleFilterTypeChange(nearestInput.value);
    }
  };
}
