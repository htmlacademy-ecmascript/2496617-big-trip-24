import { mockDestinations } from '../mock/mock-destinations';

// $======================== DestinationsModel ========================$ //

export default class DestinationsModel {
  #destinations = mockDestinations;

  getDestinations() {
    return this.#destinations;
  }

  getDestinationById(id) {
    return this.getDestinations().find((destination) => destination.id === id);
  }
}
