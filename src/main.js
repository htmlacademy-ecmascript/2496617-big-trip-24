import PointsModel from './model/points-model';
import DestinationsModel from './model/destinations-model';
import OffersModel from './model/offers-model';
import FiltersModel from './model/filters-model';

import MainPresenter from './presenter/main-presenter';
import FiltersPresenter from './presenter/filters-presenter';
import NewPointButtonView from './view/new-point-button-view';
import { render } from './framework/render';
import PointsApiService from './point-api-service';

// $======================== main ========================$ //
const AUTHORIZATION = 'Basic JZizjDBB1s';
const END_POINT = 'https://24.objects.htmlacademy.pro/big-trip';


const pointsElement = document.querySelector('.trip-events');
const headerElement = document.querySelector('.trip-main');

const newPointButtonComponent = new NewPointButtonView({
  handleNewPointButtonClick: handleNewPointButtonClick,
});

const offersModel = new OffersModel(
  { pointsApiService: new PointsApiService(END_POINT, AUTHORIZATION) }
);

const destinationsModel = new DestinationsModel(
  { pointsApiService: new PointsApiService(END_POINT, AUTHORIZATION) }
);

const pointsModel = new PointsModel(
  { pointsApiService: new PointsApiService(END_POINT, AUTHORIZATION) }
);
offersModel.init()
  .then(() => {
    destinationsModel.init();
  })
  .then(() => {
    pointsModel.init()
      .finally(() => {
        render(newPointButtonComponent, headerElement);
      });
  });

const filtersModel = new FiltersModel();

const mainPresenter = new MainPresenter({
  pointsContainer: pointsElement,
  pointsModel,
  offersModel,
  destinationsModel,
  filtersModel,
  handleNewPointDestroy,
});

const filtersPresenter = new FiltersPresenter({
  headerContainer: headerElement,
  filtersModel,
  pointsModel,
});

filtersPresenter.init();


function handleNewPointButtonClick() {
  mainPresenter.createPoint();
  newPointButtonComponent.element.disabled = true;
}

function handleNewPointDestroy() {
  newPointButtonComponent.element.disabled = false;
}

mainPresenter.init();
