import TripInfoView from '../view/trip-info-view';
import { render, replace, remove } from '../framework/render';

// $======================== TripInfoPresenter ========================$ //

export default class TripInfoPresenter {
  #tripInfoComponent = null;
  #headerContainer = null;
  #pointsModel = null;

  constructor({ headerContainer, pointsModel }) {
    this.#headerContainer = headerContainer;
    this.#pointsModel = pointsModel;

    this.#pointsModel.addObserver(this.#handleModelEvent);
  }

  get points() {
    return this.#pointsModel.points;
  }


  init() {
    if (!this.#pointsModel.isSuccessfulLoad) {
      return;
    }
    const prevTripInfoComponent = this.#tripInfoComponent;

    this.#tripInfoComponent = new TripInfoView({
      points: this.points,
      allOffers: this.#pointsModel.offers,
      allDestinations: this.#pointsModel.destinations,
    });

    if (prevTripInfoComponent === null) {
      render(this.#tripInfoComponent, this.#headerContainer);
      return;
    }
    replace(this.#tripInfoComponent, prevTripInfoComponent);
    remove(prevTripInfoComponent);
  }

  // @------------ HANDLERS ------------@ //
  #handleModelEvent = () => {
    this.init();
  };
}
