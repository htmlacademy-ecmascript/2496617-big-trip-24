import MainPresenter from './presenter/main-presenter';

// $======================== main ========================$ //
const pointsElement = document.querySelector('.trip-events');
const filtersElement = document.querySelector('.trip-controls__filters');

const mainPresenter = new MainPresenter({
  pointsContainer: pointsElement,
  filtersContainer: filtersElement,
});

mainPresenter.init();

