import { render } from '../render';
import EditFormView from '../view/edit-form-view';
import FiltersView from '../view/filters-view';
import PointView from '../view/point-view';
import PointsListView from '../view/points-list-view';
import SortView from '../view/sort-view';
import { POINTS } from '../const';

// $======================== MainPresenter ========================$ //

export default class MainPresenter {
  pointsListElement = new PointsListView();

  constructor({ tripEventsContainer, filtersContainer }) {
    this.tripEventsContainer = tripEventsContainer;
    this.filtersContainer = filtersContainer;
  }

  init() {
    render(new FiltersView(), this.filtersContainer);
    render(new SortView(), this.tripEventsContainer);
    render(new EditFormView(), this.tripEventsContainer);
    render(this.pointsListElement, this.tripEventsContainer);
    POINTS.forEach((point) => render(new PointView(point), this.pointsListElement.getElement()));
  }
}
