// $======================== DestinationsModel ========================$ //

export default class DestinationsModel {
  #destinations = [];
  #pointsApiService = null;

  constructor({ pointsApiService }) {
    this.#pointsApiService = pointsApiService;
  }

  get destinations() {
    return this.#destinations;
  }

  async init() {
    try {
      this.#destinations = await this.#pointsApiService.destinations;
    } catch (error) {
      this.#destinations = [];
    }
  }

}
