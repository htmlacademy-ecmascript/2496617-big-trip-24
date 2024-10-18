import PointsApiService from './points-api-service';

import PointsModel from './model/points-model';
import FiltersModel from './model/filters-model';

import MainPresenter from './presenter/main-presenter';
import FiltersPresenter from './presenter/filters-presenter';
import TripInfoPresenter from './presenter/trip-info-presenter';

import { AUTHORIZATION, END_POINT } from './const';

// $======================== main ========================$ //

const pointsElement = document.querySelector('.trip-events');
const headerElement = document.querySelector('.trip-main');

const pointsModel = new PointsModel(
  { pointsApiService: new PointsApiService(END_POINT, AUTHORIZATION) }
);

const filtersModel = new FiltersModel();

const tripInfoPresenter = new TripInfoPresenter({
  headerContainer: headerElement,
  pointsModel,
});

const filtersPresenter = new FiltersPresenter({
  headerContainer: headerElement,
  filtersModel,
  pointsModel,
});

const mainPresenter = new MainPresenter({
  headerContainer: headerElement,
  pointsContainer: pointsElement,
  pointsModel,
  filtersModel,
});
mainPresenter.init();

pointsModel.init()
  .finally(() => {
    tripInfoPresenter.init();
    filtersPresenter.init();
    mainPresenter.renderNewPointButton();
  });

