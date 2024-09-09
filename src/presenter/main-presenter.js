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

    this.points = [...this.pointsModel.getPoints()];

    const createForm = new EditFormView({
      point: BLANK_POINT,
      allOffers: this.offersModel.getOffersByType(BLANK_POINT.type),
      pointDestination: this.destinationsModel.getDestinationById(BLANK_POINT.destination),
      allDestinations: this.destinationsModel.getDestinations(),
    });
    render(createForm, this.pointsContainer);

    render(this.pointsListElement, this.pointsContainer);

    this.points.forEach((point) => {
      render(
        new PointView({
          point: point,
          offers: [...this.offersModel.getOffersById(point.type, point.offers)],
          destination: this.destinationsModel.getDestinationById(point.destination)
        }),
        this.pointsListElement.getElement()
      );
    });
  }
}
