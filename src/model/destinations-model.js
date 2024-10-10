import { mockDestinations } from '../mock/mock-destinations';

// $======================== DestinationsModel ========================$ //

export default class DestinationsModel {
  #destinations = mockDestinations;
  #pointsApiService = null;

  constructor({ pointsApiService }) {
    // super();
    this.#pointsApiService = pointsApiService;

    this.#pointsApiService.destinations.then((destinations) => {
      console.log(destinations);
    });
  }

  get destinations() {
    return this.#destinations;
  }

}
