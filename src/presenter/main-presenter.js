import { render } from '../render';
// import EditFormView from '../view/edit-form-view';
import FiltersView from '../view/filters-view';
import PointView from '../view/point-view';
import PointsListView from '../view/points-list-view';
import SortView from '../view/sort-view';
// import { BLANK_POINT } from '../const';

// $======================== MainPresenter ========================$ //

export default class MainPresenter {
  pointsListElement = new PointsListView();

  constructor({ pointsContainer, filtersContainer, pointsModel, destinationsModel, offersModel }) {
    this.pointsContainer = pointsContainer;
    this.filtersContainer = filtersContainer;
    this.pointsModel = pointsModel;
    this.destinationsModel = destinationsModel;
    this.offersModel = offersModel;
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
        offers: [...this.offersModel.getOffersById(this.points[i].type, this.points[i].offers)],
        destination: this.destinationsModel.getDestinationById(this.points[i].destination)
      });
      render(point, this.pointsListElement.getElement());
    }
  }
}
