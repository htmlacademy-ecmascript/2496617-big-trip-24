import { render } from './framework/render';
import PointsApiService from './points-api-service';

import PointsModel from './model/points-model';
import FiltersModel from './model/filters-model';

import MainPresenter from './presenter/main-presenter';
import FiltersPresenter from './presenter/filters-presenter';

import NewPointButtonView from './view/new-point-button-view';

import { AUTHORIZATION, END_POINT } from './const';
import TripInfoPresenter from './presenter/trip-info-presenter';

// $======================== main ========================$ //

const pointsElement = document.querySelector('.trip-events');
const headerElement = document.querySelector('.trip-main');

const newPointButtonComponent = new NewPointButtonView({
  handleNewPointButtonClick: handleNewPointButtonClick,
});
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


pointsModel.init()
  .finally(() => {
    render(newPointButtonComponent, headerElement);
    tripInfoPresenter.init();
    filtersPresenter.init();
  });


const mainPresenter = new MainPresenter({
  pointsContainer: pointsElement,
  pointsModel,
  filtersModel,
  handleNewPointDestroy,
});


function handleNewPointButtonClick() {
  mainPresenter.createPoint();
  newPointButtonComponent.element.disabled = true;
}

function handleNewPointDestroy() {
  newPointButtonComponent.element.disabled = false;
}

mainPresenter.init();
