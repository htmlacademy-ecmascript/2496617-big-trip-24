import { capitalize } from '../util';
import { POINT_EVENT_TYPE_ITEMS } from '../const';

// $======================== form templates ========================$ //

// $------------ createPointTypeTemplate ------------$ //

const createPointTypeItemTemplate = (eventTypeItem) => /*html*/`
  <div class="event__type-item">
    <input id="event-type-${eventTypeItem}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${eventTypeItem}">
    <label class="event__type-label  event__type-label--${eventTypeItem}" for="event-type-${eventTypeItem}-1">${capitalize(eventTypeItem)}</label>
  </div>
`;

export const createPointTypeTemplate = (type) => /*html*/`
  <div class="event__type-wrapper">
    <label class="event__type  event__type-btn" for="event-type-toggle-1">
      <span class="visually-hidden">Choose event type</span>
      <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
    </label>
    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

    <div class="event__type-list">
      <fieldset class="event__type-group">
        <legend class="visually-hidden">Event type</legend>
        ${POINT_EVENT_TYPE_ITEMS.map((eventTypeItem) => createPointTypeItemTemplate(eventTypeItem)).join('')}
      </fieldset>
    </div>
  </div>
`;

// $------------ createDestinationsListTemplate ------------$ //

const createDestinationOptionTemplate = (destination) => `
  <option value="${destination.name}"></option>
`;

export const createDestinationsListTemplate = (allDestinations) => /*html*/`
  <datalist id="destination-list-1">
    ${allDestinations.map((destination) => createDestinationOptionTemplate(destination)).join('')}
  </datalist>
`;


// $------------ createOffersContainerTemplate ------------$ //

const createOfferTemplate = ({ id, title, price }) => /*html*/`
  <div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden" id="event-offer-${id}-1" type="checkbox" name="event-offer-${id}">
    <label class="event__offer-label" for="event-offer-${id}-1">
      <span class="event__offer-title">${title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${price}</span>
    </label>
  </div>
`;

export const createOffersContainerTemplate = ({ offers }) =>/*html*/`
  <section class="event__section  event__section--offers">
    <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      <div class="event__available-offers">
        ${offers.map((offer) => createOfferTemplate(offer)).join('')}
      </div>
  </section>
`;


// $------------ createPhotosContainerTemplate ------------$ //

const createPhotoItemTemplate = (photoPath) => /*html*/`
  <img class="event__photo" src="${photoPath}" alt="Event photo">
`;

export const createPhotosContainerTemplate = (photosPaths) => /*html*/`
  <div class="event__photos-container">
    <div class="event__photos-tape">
    ${photosPaths.map((photoPath) => createPhotoItemTemplate(photoPath)).join('')}
    </div>
  </div>
`;


// $------------ createDestinationTemplate ------------$ //

export const createDestinationTemplate = (destination) => {
  const { description, pictures: photoPaths } = destination;

  return /*html*/`
    <section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">
        ${description}
      </p>

      <div class="event__photos-container">
        <div class="event__photos-tape">
          ${photoPaths.map((photoPath) => `
            <img class="event__photo" src="${photoPath.src}" alt="${photoPath.description}">
          `).join('')}
        </div>
      </div>

    </section>
  `;
};
