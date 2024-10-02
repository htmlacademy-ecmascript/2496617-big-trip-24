import { UpdateType } from '../const';
import { render, remove, replace } from '../framework/render';
import { FilterType, filter } from '../utils/filter';
import FiltersView from '../view/filters-view';

// $======================== FilterPresenter ========================$ //

export default class FiltersPresenter {
  #filtersContainer = null;
  #filtersModel = null;
  #pointsModel = null;

  #filtersComponent = null;

  constructor({ filtersContainer, filtersModel, pointsModel }) {
    this.#filtersContainer = filtersContainer;
    this.#filtersModel = filtersModel;
    this.#pointsModel = pointsModel;

    this.#pointsModel.addObserver(this.#handleModelEvent);
    this.#filtersModel.addObserver(this.#handleModelEvent);
  }

  get filters() {
    const points = this.#pointsModel.points;

    return Object.values(FilterType).map((type) => ({
      type,
      count: filter[type](points).length
    }));
  }

  init() {
    const filters = this.filters;
    const prevFilterComponent = this.#filtersComponent;

    this.#filtersComponent = new FiltersView({
      filters,
      currentFilterType: this.#filtersModel.filter,
      handleFilterTypeChange: this.#handleFilterTypeChange,
    });

    if (prevFilterComponent === null) {
      render(this.#filtersComponent, this.#filtersContainer);
      return;
    }
    replace(this.#filtersComponent, prevFilterComponent);
    remove(prevFilterComponent);
  }

  #handleModelEvent = () => {
    this.init();
  };

  #handleFilterTypeChange = (filterType) => {
    if (this.#filtersModel.filter === filterType && filterType) {
      return;
    }

    this.#filtersModel.setFilter(UpdateType.MAJOR, filterType);
  };
}
