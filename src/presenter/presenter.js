import { render } from '../render';
import EditPointView from '../view/edit-point-view';
import FiltersView from '../view/filters-view';
import SortView from '../view/sort-view';

// $======================== presenter ========================$ //

const filtersElement = document.querySelector('.trip-controls__filters');
const sortElement = document.querySelector('.trip-events');
const pageBodyElement = document.querySelector('.page-body__page-main .page-body__container');

render(new FiltersView(), filtersElement);
render(new SortView(), sortElement);
render(new EditPointView(), pageBodyElement);
