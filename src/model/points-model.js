import Observable from '../framework/observable';
import { UpdateType } from '../const';
// $======================== PointsModel ========================$ //

export default class PointsModel extends Observable {
  #points = [];
  #offers = [];
  #destinations = [];

  #pointsApiService = null;

  isLoaded = true;

  // @------------ CONSTRUCTOR ------------@ //
  constructor({ pointsApiService }) {
    super();
    this.#pointsApiService = pointsApiService;
  }

  get offers() {
    return this.#offers;
  }

  get points() {
    return this.#points;
  }

  get destinations() {
    return this.#destinations;
  }

  #adaptToClient(point) {
    const adaptedPoint = {
      ...point,
      dateFrom: point['date_from'],
      dateTo: point['date_to'],
      basePrice: point['base_price'],
      isFavorite: point['is_favorite'],
    };

    delete adaptedPoint['date_from'];
    delete adaptedPoint['date_to'];
    delete adaptedPoint['base_price'];
    delete adaptedPoint['is_favorite'];

    return adaptedPoint;
  }

  // @------------ UPDATE POINT ------------@ //
  async updatePoint(updateType, update) {
    const index = this.#points.findIndex((point) => point.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t update unexisting point');
    }

    try {
      const response = await this.#pointsApiService.updatePoint(update);
      const updatedPoint = this.#adaptToClient(response);
      this.#points = [
        ...this.#points.slice(0, index),
        updatedPoint,
        ...this.#points.slice(index + 1),
      ];

      this._notify(updateType, update);
    } catch (error) {
      throw new Error('Can\'t update point');
    }
  }

  // @------------ ADD POINT ------------@ //
  async addPoint(updateType, update) {
    try {
      const response = await this.#pointsApiService.addPoint(update);
      const newPoint = this.#adaptToClient(response);
      this.#points = [
        newPoint,
        ...this.#points,
      ];

      this._notify(updateType, update);

    } catch (error) {
      throw new Error('Can\'t add point');
    }
  }

  // @------------ DELETE POINT ------------@ //
  async deletePoint(updateType, update) {
    const index = this.#points.findIndex((point) => point.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t delete unexisting point');
    }

    try {
      await this.#pointsApiService.deletePoint(update);
      this.#points = [
        ...this.#points.slice(0, index),
        ...this.#points.slice(index + 1),
      ];

      this._notify(updateType);
    } catch (error) {
      throw new Error('Can\'t delete task');
    }
  }

  // @------------ INIT ------------@ //
  async init() {
    try {
      this.#offers = await this.#pointsApiService.offers;
      this.#destinations = await this.#pointsApiService.destinations;
      const points = await this.#pointsApiService.points;
      this.#points = points.map(this.#adaptToClient);
    } catch (error) {
      this.#offers = [];
      this.#destinations = [];
      this.#points = [];
      this.isLoaded = false;
    } finally {
      this._notify(UpdateType.INIT);
    }
  }
}
