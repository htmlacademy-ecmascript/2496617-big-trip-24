import { mockOffers } from '../mock/mock-offers';

// $======================== OffersModel ========================$ //

export default class OffersModel {
  #offers = [];
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

  async init() {
    try {
      this.#offers = await this.#pointsApiService.offers;
      console.log(1);
    } catch (error) {
      this.#offers = [];
      console.log(2);
    }
  }
}
