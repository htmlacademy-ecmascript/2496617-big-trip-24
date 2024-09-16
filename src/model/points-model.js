import { mockPoints, getRandomPoint } from '../mock/mock-points';
import { getRandomInt } from '../utils/common';
// $======================== PointsModel ========================$ //

export default class PointsModel {
  #points = Array.from({ length: getRandomInt(0, mockPoints.length - 1) }, getRandomPoint);

  get points() {
    return this.#points;
  }
}
