import { render } from '../render';
import FiltersView from '../view/filters-view';
import SortView from '../view/sort-view';

// $======================== presenter ========================$ //

const filtersElement = document.querySelector('.trip-controls__filters');
const sortElement = document.querySelector('.trip-events');

render(new FiltersView(), filtersElement);
render(new SortView(), sortElement);
