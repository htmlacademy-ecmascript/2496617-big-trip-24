import { DATE_FORMAT, TIME_FORMAT } from '../const';
import AbstractView from '../framework/view/abstract-view';
import { getDuration, humanizeTime, humanizeDuration, getDestinationById, getOffersById } from '../utils/point';
import he from 'he';

// $======================== PointView ========================$ //

const createOffersTemplate = (pointOffers) => (pointOffers.map(({ title, price }) => `
    <li class="event__offer">
      <span class="event__offer-title">${title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${price}</span>
    </li>
  `).join(''));

const createPointTemplate = (point, allOffers, allDestinations) => {
  const { basePrice, dateFrom, dateTo, isFavorite, type } = point;

  const pointOffers = getOffersById(allOffers, point.type, point.offers);
  const pointDestination = getDestinationById(allDestinations, point.destination);

  const date = humanizeTime(dateFrom, DATE_FORMAT);
  const startTime = humanizeTime(dateFrom, TIME_FORMAT);
  const endTime = humanizeTime(dateTo, TIME_FORMAT);
  const duration = dateFrom && dateTo ? humanizeDuration(getDuration(dateFrom, dateTo)) : '';

  const offersTemplate = createOffersTemplate(pointOffers);

  return `
    <li class="trip-events__item">
      <div class="event">
        <time class="event__date" datetime="2019-03-18">${date}</time>

        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
        </div>

        <h3 class="event__title">${type} ${pointDestination ? pointDestination.name : ''}</h3>

        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${startTime}">${startTime}</time>
            &mdash;
            <time class="event__end-time" datetime="${endTime}">${endTime}</time>
          </p>
          <p class="event__duration">${duration}</p>
        </div>

        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${he.encode(String(basePrice))}</span>
        </p>

        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          ${offersTemplate}
        </ul>

        <button class="event__favorite-btn ${isFavorite ? 'event__favorite-btn--active' : ''} " type="button">
          <span class="visually-hidden">Add to favorite</span>
          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
          </svg>
        </button>

        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>

      </div>
    </li>
  `;
};

export default class PointView extends AbstractView {
  #point = null;
  #allOffers = [];
  #allDestinations = [];
  #handleEditClick = null;

  #handleFavoriteClick = null;

  constructor({ point, allOffers, allDestinations, handleEditClick, handleFavoriteClick }) {
    super();
    this.#point = point;
    this.#allOffers = allOffers;
    this.#allDestinations = allDestinations;

    this.#handleEditClick = handleEditClick;
    this.element.querySelector('.event__rollup-btn')
      .addEventListener('click', this.#onEditClick);

    this.#handleFavoriteClick = handleFavoriteClick;
    this.element.querySelector('.event__favorite-btn')
      .addEventListener('click', this.#onFavoriteClick);
  }

  get template() {
    return createPointTemplate(this.#point, this.#allOffers, this.#allDestinations);
  }

  #onEditClick = (evt) => {
    evt.preventDefault();
    this.#handleEditClick();
  };

  #onFavoriteClick = (evt) => {
    evt.preventDefault();
    this.#handleFavoriteClick();
  };
}
