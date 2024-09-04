import { mockPoints } from '../mock/mock-points';

// $======================== PointsModel ========================$ //

export default class PointsModel {
  points = mockPoints;

  getPoints() {
    return this.points;
  }
}
