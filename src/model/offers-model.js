// $======================== OffersModel ========================$ //

export default class OffersModel {
  #offers = [];
  #pointsApiService = null;

  constructor({ pointsApiService }) {
    this.#pointsApiService = pointsApiService;
  }

  get offers() {
    return this.#offers;
  }

  async init() {
    try {
      this.#offers = await this.#pointsApiService.offers;
    } catch (error) {
      this.#offers = [];
    }
  }
}
