import { render } from '../render';
import EditFormView from '../view/edit-form-view';
import FiltersView from '../view/filters-view';
import PointView from '../view/point-view';
import PointsListView from '../view/points-list-view';
import SortView from '../view/sort-view';
import { BLANK_POINT } from '../const';

// $======================== MainPresenter ========================$ //

export default class MainPresenter {
  pointsListElement = new PointsListView();

  constructor({ pointsContainer, filtersContainer, pointsModel }) {
    this.pointsContainer = pointsContainer;
    this.filtersContainer = filtersContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    render(new FiltersView(), this.filtersContainer);
    render(new SortView(), this.pointsContainer);
    // render(new EditFormView(BLANK_POINT), this.pointsContainer);
    render(this.pointsListElement, this.pointsContainer);

    this.points = [...this.pointsModel.getPoints()];

    for (let i = 0; i < this.points.length; i++) {
      const point = new PointView({
        point: this.points[i],
        offers: [...this.pointsModel.getOffersById(this.points[i].type, this.points[i].offers)],
        destination: this.pointsModel.getDestinationById(this.points[i].destination).name
      });
      render(point, this.pointsListElement.getElement());
    }
  }
}
