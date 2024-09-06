import { mockPoints } from '../mock/mock-points';
import { mockDestinations } from '../mock/mock-destinations';
import { mockOffers } from '../mock/mock-offers';

// $======================== PointsModel ========================$ //

export default class PointsModel {
  points = mockPoints;
  destinations = mockDestinations;
  offers = mockOffers;

  getPoints() {
    return this.points;
  }

  getDestinations() {
    return this.destinations;
  }

  getOffers() {
    return this.offers;

  }

  getDestinationById(id) {
    return this.getDestinations().find((destination) => destination.id === id);
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
