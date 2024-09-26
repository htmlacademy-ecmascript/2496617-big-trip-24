import { mockOffers } from '../mock/mock-offers';

// $======================== OffersModel ========================$ //

export default class OffersModel {
  #offers = mockOffers;

  get offers() {
    return this.#offers;
  }
}
