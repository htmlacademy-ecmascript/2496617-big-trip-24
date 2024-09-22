import { render } from '../framework/render';
import { generateFilter } from '../mock/mock-filter';
import FiltersView from '../view/filters-view';

// $======================== FiltersPresenter ========================$ //

export default class FiltersPresenter {
  #filtersContainer = null;
  #points = null;

  constructor({ filtersContainer, points }) {
    this.#filtersContainer = filtersContainer;
    this.#points = points;
  }

  #renderFilters() {
    const filters = generateFilter(this.#points);
    render(new FiltersView({ filters }), this.#filtersContainer);
  }

  init() {
    this.#renderFilters();
  }
}
