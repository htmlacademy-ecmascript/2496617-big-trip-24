import { mockPoints, getRandomPoint } from '../mock/mock-points';
import { getRandomInt } from '../util';
// $======================== PointsModel ========================$ //

export default class PointsModel {
  #points = Array.from({ length: getRandomInt(1, mockPoints.length - 1) }, getRandomPoint);

  getPoints() {
    return this.#points;
  }
}
