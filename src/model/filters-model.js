import Observable from '../framework/observable';
import { FilterType } from '../const';

// $======================== FilterModel ========================$ //

export default class FiltersModel extends Observable {
  #filter = FilterType.EVERYTHING;

  get filter() {
    return this.#filter;
  }

  setFilter(updateType, filter) {
    if (filter) {
      this.#filter = filter;
      this._notify(updateType, filter);
    }
  }
}
