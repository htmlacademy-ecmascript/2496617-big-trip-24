import { mockDestinations } from '../mock/mock-destinations';

// $======================== DestinationsModel ========================$ //

export default class DestinationsModel {
  #destinations = mockDestinations;

  get destinations() {
    return this.#destinations;
  }

  getDestinationById(id) {
    return this.#destinations.find((destination) => destination.id === id);
  }
}
