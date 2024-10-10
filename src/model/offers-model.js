import { mockOffers } from '../mock/mock-offers';

// $======================== OffersModel ========================$ //

export default class OffersModel {
  #offers = mockOffers;
  #pointsApiService = null;

  constructor({ pointsApiService }) {
    // super();
    this.#pointsApiService = pointsApiService;

    this.#pointsApiService.offers.then((offers) => {
      console.log(offers);
    });
  }

  get offers() {
    return this.#offers;
  }
}
