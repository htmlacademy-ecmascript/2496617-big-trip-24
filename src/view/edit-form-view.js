import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import AbstractStatefulView from '../framework/view/abstract-stateful-view';
import {
  createPointTypeTemplate,
  createOffersContainerTemplate,
  createDestinationTemplate,
  createDestinationsListTemplate
} from './forms-templates';
import { DateType } from '../const';
import { capitalize } from '../utils/common';
import { getDestinationById, getDestinationByName, getOffersById, getOffersByType, humanizeDateAndTime } from '../utils/point';


// $======================== EditFormView ========================$ //

const createEditFormTemplate = (point, allOffers, allDestinations) => {

  const { basePrice, dateFrom, dateTo, type } = point;

  const offersById = getOffersById(allOffers, point.type, point.offers);
  const offersByType = getOffersByType(allOffers, point.type);
  const pointDestination = getDestinationById(allDestinations, point.destination);

  const pointTypeTemplate = createPointTypeTemplate(type);
  const destinationsListTemplate = createDestinationsListTemplate(allDestinations);
  const destinationTemplate = createDestinationTemplate(pointDestination);
  const offersContainerTemplate = createOffersContainerTemplate(offersByType, offersById);

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

          ${offersByType.length !== 0 ? offersContainerTemplate : ''}

          ${destinationTemplate}

      </form>
    </li>
  `;
};

export default class EditFormView extends AbstractStatefulView {
  #allOffers = [];
  #allDestinations = [];

  #handleFormSubmit = null;
  #handleFormClose = null;
  #handleDeleteClick = null;

  #dateStartPicker = null;
  #dateEndPicker = null;

  constructor({ point, allOffers, allDestinations, handleFormSubmit, handleFormClose, handleDeleteClick }) {
    super();
    this.#allOffers = allOffers;
    this.#allDestinations = allDestinations;

    this.#handleFormSubmit = handleFormSubmit;
    this.#handleFormClose = handleFormClose;
    this.#handleDeleteClick = handleDeleteClick;

    this._setState(EditFormView.parsePointToState(point));

    this._restoreHandlers();
  }

  get template() {
    return createEditFormTemplate(this._state, this.#allOffers, this.#allDestinations);
  }

  removeElement() {
    super.removeElement();

    if (this.#dateStartPicker) {
      this.#dateStartPicker.destroy();
      this.#dateStartPicker = null;
    }
    if (this.#dateEndPicker) {
      this.#dateEndPicker.destroy();
      this.#dateEndPicker = null;
    }
  }

  reset(point) {
    this.updateElement(
      EditFormView.parsePointToState(point)
    );
  }

  _restoreHandlers() {
    this.element.querySelector('.event__rollup-btn')
      .addEventListener('click', this.#onFormClose);

    this.element.querySelector('.event__save-btn')
      .addEventListener('click', this.#onFormSubmit);

    this.element.querySelector('.event__type-group')
      .addEventListener('change', this.#onTypeChange);

    this.element.querySelector('.event__input--destination')
      .addEventListener('change', this.#onDestinationChange);

    this.element.querySelectorAll('.event__input--time').forEach((input) => {
      this.#setDatePicker(input);
    });

    this.element.querySelector('.event__reset-btn')
      .addEventListener('click', this.#onDeleteClick);
  }

  #setDatePicker(input) {
    const createFlatpickrConfig = (dateType, defaultDate = null, minDate = null, maxDate = null) => ({
      dateFormat: 'd/m/y H:i',
      enableTime: true,
      'time_24hr': true,
      minuteIncrement: 1,
      disableMobile: true,
      minDate: minDate,
      maxDate: maxDate,
      defaultDate: defaultDate,
      onChange: (selectedDates) => this.#onDateChange(selectedDates, dateType),
    });

    if (input.name === 'event-start-time') {
      this.#dateStartPicker = flatpickr(
        input,
        createFlatpickrConfig(DateType.START, new Date(this._state.dateFrom), null, null)
      );
    } else if (input.name === 'event-end-time') {
      this.#dateEndPicker = flatpickr(
        input,
        createFlatpickrConfig(DateType.END, new Date(this._state.dateTo), new Date(this._state.dateFrom))
      );
    }
  }

  // @------------ обработчики ------------@ //
  #onFormSubmit = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit(EditFormView.parseStateToPoint(this._state));
  };

  #onFormClose = (evt) => {
    evt.preventDefault();
    this.#handleFormClose();
  };

  #onTypeChange = (evt) => {
    evt.preventDefault();
    const targetsParentElement = evt.target.parentElement;
    const nearestInput = targetsParentElement.querySelector('input');
    if (this._state.type === nearestInput.value) {
      return;
    }
    this.updateElement({
      type: nearestInput.value,
      offers: [],
    });
  };

  #onDestinationChange = (evt) => {
    evt.preventDefault();
    const destinationByName = getDestinationByName(this.#allDestinations, evt.target.value);

    if (destinationByName) {
      this.updateElement({
        destination: destinationByName.id,
      });
    }
  };

  #onDateChange = ([userDate], dateType) => {
    switch (dateType) {
      case (DateType.START):
        this._setState({ dateFrom: userDate });
        if (new Date(this._state.dateFrom) > new Date(this._state.dateTo)) {
          this._setState({ dateTo: userDate });
          this.#dateEndPicker.set('defaultDate', this._state.dateFrom);
        }
        this.#dateEndPicker.set('minDate', userDate);
        break;
      case (DateType.END):
        this.#dateStartPicker.set('maxDate', userDate);
        this._setState({ dateTo: userDate });
        break;
    }
  };

  #onDeleteClick = (evt) => {
    evt.preventDefault();
    this.#handleDeleteClick(EditFormView.parseStateToPoint(this._state));
  };

  // @------------ статические методы ------------@ //
  static parsePointToState(point) {
    return { ...point };
  }

  static parseStateToPoint(state) {
    return { ...state };
  }
}
