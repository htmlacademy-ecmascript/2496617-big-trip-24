import { mockPoints, getRandomPoint } from '../mock/mock-points';
import { getRandomInt } from '../utils/common';
import Observable from '../framework/observable';
// $======================== PointsModel ========================$ //

export default class PointsModel extends Observable {
  #points = [...new Set(Array.from({ length: getRandomInt(0, mockPoints.length - 1) }, getRandomPoint))];

  get points() {
    return this.#points;
  }
}
