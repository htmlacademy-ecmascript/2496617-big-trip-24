import MainPresenter from './presenter/main-presenter';

const tripEventsElement = document.querySelector('.trip-events');
const filtersElement = document.querySelector('.trip-controls__filters');

const mainPresenter = new MainPresenter({
  tripEventsContainer: tripEventsElement,
  filtersContainer: filtersElement
});

mainPresenter.init();
