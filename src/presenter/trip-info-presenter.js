import TripInfoView from '../view/trip-info-view';
import { render, replace, remove } from '../framework/render';

// $======================== TripInfoPresenter ========================$ //

export default class TripInfoPresenter {
  #tripInfoComponent = null;
  #headerContainer = null;
  #pointsModel;
  #destinationsModel = null;
  #offersModel = null;

  constructor({ headerContainer, pointsModel, offersModel, destinationsModel }) {
    this.#headerContainer = headerContainer;
    this.#pointsModel = pointsModel;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;

    this.#pointsModel.addObserver(this.#handleModelEvent);
  }

  get points() {
    return this.#pointsModel.points;
  }


  init() {
    const prevTripInfoComponent = this.#tripInfoComponent;

    this.#tripInfoComponent = new TripInfoView({
      points: this.points,
      allOffers: this.#offersModel.offers,
      allDestinations: this.#destinationsModel.destinations,
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
