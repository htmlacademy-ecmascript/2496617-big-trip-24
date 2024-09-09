import { mockOffers } from '../mock/mock-offers';

// $======================== OffersModel ========================$ //

export default class OffersModel {
  #offers = mockOffers;

  getOffers() {
    return this.#offers;
  }

  getOffersByType(type) {
    return this.getOffers().find((offer) => offer.type === type);
  }

  getOffersById(type, pointOffersIds) {
    const offersByType = this.getOffersByType(type);
    const offerItems = offersByType.offers;
    return offerItems.filter((offerItem) => pointOffersIds.find((id) => offerItem.id === id));
  }
}
