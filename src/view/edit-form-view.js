import { createElement } from '../render';
import {
  createPointTypeTemplate,
  createOffersContainerTemplate,
  createDestinationTemplate,
  createDestinationsListTemplate
} from './forms-templates';
import { capitalize, humanizeDateAndTime } from '../util';

// $======================== EditFormView ========================$ //

const createEditPointTemplate = (point, allOffers, pointDestination, allDestinations) => {

  const { basePrice, dateFrom, dateTo, type } = point;

  const pointTypeTemplate = createPointTypeTemplate(type);
  const destinationsListTemplate = createDestinationsListTemplate(allDestinations);
  const destinationTemplate = createDestinationTemplate(pointDestination);
  const offersContainerTemplate = createOffersContainerTemplate(allOffers);

  return /*html*/`
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">

          ${pointTypeTemplate}

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
            ${capitalize(type)}
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${pointDestination.name}" list="destination-list-1">

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
  `;
};

export default class EditFormView {

  constructor({ point, allOffers, pointDestination, allDestinations }) {
    this.point = point;
    this.allOffers = allOffers;
    this.pointDestination = pointDestination;
    this.allDestinations = allDestinations;
  }

  getTemplate() {
    return createEditPointTemplate(this.point, this.allOffers, this.pointDestination, this.allDestinations);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
