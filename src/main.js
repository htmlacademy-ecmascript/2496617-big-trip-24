import MainPresenter from './presenter/main-presenter';
import PointsModel from './model/points-model';

const pointsElement = document.querySelector('.trip-events');
const filtersElement = document.querySelector('.trip-controls__filters');

const pointsModel = new PointsModel();

const mainPresenter = new MainPresenter({
  pointsContainer: pointsElement,
  filtersContainer: filtersElement,
  pointsModel,
});

mainPresenter.init();
