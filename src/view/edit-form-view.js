import AbstractView from '../framework/view/abstract-view';
import {
  createPointTypeTemplate,
  createOffersContainerTemplate,
  createDestinationTemplate,
  createDestinationsListTemplate
} from './forms-templates';
import { capitalize } from '../utils/common';
import { humanizeDateAndTime } from '../utils/point';

// $======================== EditFormView ========================$ //

const createEditFormTemplate = (point, allOffers, pointDestination = null, allDestinations) => {

  const { basePrice, dateFrom, dateTo, type } = point;

  const pointTypeTemplate = createPointTypeTemplate(type);
  const destinationsListTemplate = createDestinationsListTemplate(allDestinations);
  const destinationTemplate = createDestinationTemplate(pointDestination);
  const offersContainerTemplate = createOffersContainerTemplate(allOffers);

  return /*html*/`
    <li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">

            ${pointTypeTemplate}

          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-1">
              ${capitalize(type)}
            </label>
            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination"
            value="${pointDestination ? pointDestination.name : ''}" list="destination-list-1">

            ${destinationsListTemplate}

          </div>

          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-1">From</label>
            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${humanizeDateAndTime(dateFrom)}">
            &mdash;
            <label class="visually-hidden" for="event-end-time-1">To</label>
            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${humanizeDateAndTime(dateTo)}">
          </div>

          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-1">
              <span class="visually-hidden">Price</span>
              &euro;
            </label>
            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
          </div>

          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Delete</button>
          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>
        </header>

          ${offersContainerTemplate}

          ${destinationTemplate}

      </form>
    </li>
  `;
};

export default class EditFormView extends AbstractView {
  #point = null;
  #pointDestination = null;
  #allOffers = [];
  #allDestinations = [];

  #handleFormSubmit = null;

  constructor({ point, allOffers, pointDestination, allDestinations, handleFormSubmit }) {
    super();
    this.#point = point;
    this.#allOffers = allOffers;
    this.#pointDestination = pointDestination;
    this.#allDestinations = allDestinations;
    this.#handleFormSubmit = handleFormSubmit;

    this.element.querySelector('.event__rollup-btn')
      .addEventListener('click', this.#onFormSubmit);

    this.element.querySelector('.event__save-btn')
      .addEventListener('click', this.#onFormSubmit);
  }

  get template() {
    return createEditFormTemplate(this.#point, this.#allOffers, this.#pointDestination, this.#allDestinations);
  }

  #onFormSubmit = (e) => {
    e.preventDefault();
    this.#handleFormSubmit();
  };
}
