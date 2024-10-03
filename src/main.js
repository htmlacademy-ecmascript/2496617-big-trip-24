import PointsModel from './model/points-model';
import DestinationsModel from './model/destinations-model';
import OffersModel from './model/offers-model';
import FiltersModel from './model/filters-model';

import MainPresenter from './presenter/main-presenter';
import FiltersPresenter from './presenter/filters-presenter';
import NewPointButtonView from './view/new-point-button-view';
import { render } from './framework/render';

// $======================== main ========================$ //


const pointsElement = document.querySelector('.trip-events');
const headerElement = document.querySelector('.trip-main');

const pointsModel = new PointsModel();
const offersModel = new OffersModel();
const destinationsModel = new DestinationsModel();
const filtersModel = new FiltersModel();

const mainPresenter = new MainPresenter({
  pointsContainer: pointsElement,
  pointsModel,
  offersModel,
  destinationsModel,
  filtersModel,
});

const filtersPresenter = new FiltersPresenter({
  headerContainer: headerElement,
  filtersModel,
  pointsModel,
});

filtersPresenter.init();


const newPointButtonComponent = new NewPointButtonView({
  handleNewPointButtonClick: handleNewPointButtonClick,
});

function handleNewPointButtonClick() {
  mainPresenter.createPoint();
  newPointButtonComponent.element.disabled = true;
}

render(newPointButtonComponent, headerElement);

mainPresenter.init();


