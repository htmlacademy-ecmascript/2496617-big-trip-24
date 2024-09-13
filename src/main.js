import MainPresenter from './presenter/main-presenter';
import PointsModel from './model/points-model';
import DestinationsModel from './model/destinations-model';
import OffersModel from './model/offers-model';
import { generateFilter } from './mock/mock-filter';

const pointsElement = document.querySelector('.trip-events');
const filtersElement = document.querySelector('.trip-controls__filters');

const pointsModel = new PointsModel();
const destinationsModel = new DestinationsModel();
const offersModel = new OffersModel();

const filters = generateFilter(pointsModel.points);

const mainPresenter = new MainPresenter({
  pointsContainer: pointsElement,
  filtersContainer: filtersElement,
  pointsModel,
  destinationsModel,
  offersModel,
});

mainPresenter.init();

export { filters };
