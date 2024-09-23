import PointsModel from './model/points-model';
import DestinationsModel from './model/destinations-model';
import OffersModel from './model/offers-model';

import MainPresenter from './presenter/main-presenter';

// $======================== main ========================$ //
const pointsElement = document.querySelector('.trip-events');
const filtersElement = document.querySelector('.trip-controls__filters');

const pointsModel = new PointsModel();
const offersModel = new OffersModel();
const destinationsModel = new DestinationsModel();

const mainPresenter = new MainPresenter({
  pointsContainer: pointsElement,
  filtersContainer: filtersElement,
  pointsModel,
  offersModel,
  destinationsModel
});

mainPresenter.init();

