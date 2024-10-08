import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import he from 'he';

import AbstractStatefulView from '../framework/view/abstract-stateful-view';
import {
  createPointTypeTemplate,
  createOffersContainerTemplate,
  createDestinationTemplate,
  createDestinationsListTemplate
} from './forms-templates';
import { BLANK_POINT, DateType } from '../const';
import { capitalize, isNumber } from '../utils/common';
import { getDestinationById, getDestinationByName, getOffersById, getOffersByType, humanizeDateAndTime } from '../utils/point';


// $======================== EditFormView ========================$ //

const createEditFormTemplate = (point, allOffers, allDestinations, isNew) => {

  const { basePrice, dateFrom, dateTo, type } = point;

  const offersById = !isNew ?
    getOffersById(allOffers, point.type, point.offers) : [];

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
            value="${he.encode(pointDestination ? pointDestination.name : '')}" list="destination-list-1">

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
            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${he.encode(String(basePrice))}">
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
  #isNew = false;

  constructor({ isNew, point = BLANK_POINT, allOffers, allDestinations, handleFormSubmit, handleFormClose, handleDeleteClick }) {
    super();
    this.#isNew = isNew;

    this.#allOffers = allOffers;
    this.#allDestinations = allDestinations;

    this.#handleFormSubmit = handleFormSubmit;
    this.#handleFormClose = handleFormClose;
    this.#handleDeleteClick = handleDeleteClick;

    this._setState(EditFormView.parsePointToState(point));

    this._restoreHandlers();
  }

  get template() {
    return createEditFormTemplate(this._state, this.#allOffers, this.#allDestinations, this.#isNew);
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

    const priceInput = this.element.querySelector('.event__input--price');
    priceInput.addEventListener('change', this.#onPriceChange);
    priceInput.addEventListener('input', this.#onPriceInput);

    this.element.querySelector('.event__available-offers')
      ?.addEventListener('click', this.#onOffersClick);
  }

  // @------------ выбор даты ------------@ //
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

    const configureDate = (date) => !this.#isNew && date ? new Date(date) : null;

    if (input.name === 'event-start-time') {
      this.#dateStartPicker = flatpickr(
        input,
        createFlatpickrConfig(DateType.START, configureDate(this._state.dateFrom), null, null)
      );
    } else if (input.name === 'event-end-time') {
      this.#dateEndPicker = flatpickr(
        input,
        createFlatpickrConfig(DateType.END, configureDate(this._state.dateTo), configureDate(this._state.dateFrom))
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
    const targetParentElement = evt.target.parentElement;
    const nearestInput = targetParentElement.querySelector('input');
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

  #onPriceChange = (evt) => {
    evt.preventDefault();
    this._setState({
      basePrice: evt.target.value,
    });
  };

  #onPriceInput = (evt) => {
    const inputValue = evt.target.value;

    if (!isNumber(inputValue)) {
      evt.preventDefault();
      evt.target.value = inputValue.replace(/[^0-9]/g, '');
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

  #onOffersClick = (evt) => {
    evt.preventDefault();
    const offerSelector = evt.target.closest('.event__offer-selector');
    if (!offerSelector) {
      return;
    }
    const clickedOfferId = offerSelector.querySelector('input').id;
    const clickedOfferIndex = this._state.offers.indexOf(clickedOfferId);

    const removeOffer = () => {
      this.updateElement({
        offers: [
          ...this._state.offers.slice(0, clickedOfferIndex),
          ...this._state.offers.slice(clickedOfferIndex + 1)
        ]
      });
    };
    const addOffer = () => {
      this.updateElement({
        offers: [
          ...this._state.offers,
          clickedOfferId
        ]
      });
    };

    if (clickedOfferIndex !== -1) {
      removeOffer();
    } else {
      addOffer();
    }
  };

  // @------------ статические методы ------------@ //
  static parsePointToState(point) {
    return { ...point };
  }

  static parseStateToPoint(state) {
    return { ...state };
  }
}
