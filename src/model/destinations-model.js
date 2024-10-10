import { mockDestinations } from '../mock/mock-destinations';

// $======================== DestinationsModel ========================$ //

export default class DestinationsModel {
  #destinations = [];
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

  async init() {
    try {
      this.#destinations = await this.#pointsApiService.destinations;
      console.log(1);
    } catch (error) {
      this.#destinations = [];
      console.log(2);
    }
  }

}
