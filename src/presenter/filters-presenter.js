import { UpdateType, FilterType } from '../const';
import { render, remove, replace } from '../framework/render';
import { filter } from '../utils/filter';
import FiltersView from '../view/filters-view';

// $======================== FilterPresenter ========================$ //

export default class FiltersPresenter {
  #headerContainer = null;
  #filtersModel = null;
  #pointsModel = null;

  #filtersComponent = null;

  // @------------ CONSTRUCTOR ------------@ //
  constructor({ headerContainer, filtersModel, pointsModel }) {
    this.#headerContainer = headerContainer;
    this.#filtersModel = filtersModel;
    this.#pointsModel = pointsModel;

    this.#pointsModel.addObserver(this.#handleModelEvent);
    this.#filtersModel.addObserver(this.#handleModelEvent);
  }

  // @------------ GETTERS ------------@ //
  get filters() {
    const points = this.#pointsModel.points;

    return Object.values(FilterType).map((type) => ({
      type,
      count: filter[type](points).length
    }));
  }

  // @------------ INIT ------------@ //
  init() {
    if (!this.#pointsModel.isSuccessfulLoad) {
      return;
    }
    const filters = this.filters;
    const prevFilterComponent = this.#filtersComponent;

    this.#filtersComponent = new FiltersView({
      filters,
      currentFilterType: this.#filtersModel.filter,
      handleFilterTypeChange: this.#handleFilterTypeChange,
    });

    if (prevFilterComponent === null) {
      render(this.#filtersComponent, this.#headerContainer);
      return;
    }
    replace(this.#filtersComponent, prevFilterComponent);
    remove(prevFilterComponent);
  }

  // @------------ HANDLERS ------------@ //
  #handleModelEvent = () => {
    this.init();
  };

  #handleFilterTypeChange = (filterType) => {
    if (this.#filtersModel.filter === filterType) {
      return;
    }

    this.#filtersModel.setFilter(UpdateType.MAJOR, filterType);
  };
}
