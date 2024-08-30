import FiltersView from '../view/filters-view';
import { render } from '../render';

const filtersElement = document.querySelector('.trip-controls__filters');

render(new FiltersView(), filtersElement);
