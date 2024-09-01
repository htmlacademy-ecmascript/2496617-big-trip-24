import { render } from '../render';
import AddFormView from '../view/add-form-view';
// import EditFormView from '../view/edit-point-view';
import FiltersView from '../view/filters-view';
import PointView from '../view/point-view';
import PointsListView from '../view/points-list-view';
import SortView from '../view/sort-view';
import { POINTS } from '../data';

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
    render(new AddFormView(), this.tripEventsContainer);
    render(this.pointsListElement, this.tripEventsContainer);
    POINTS.map((point) => render(new PointView(point), this.pointsListElement.getElement()));
  }
}
