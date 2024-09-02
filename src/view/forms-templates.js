import { capitalize } from '../util';
import { POINT_EVENT_TYPE_ITEMS } from '../const';

// $======================== createEventTypeList ========================$ //

const createEventTypeItemTemplate = (eventTypeItem) => /*html*/`
  <div class="event__type-item">
    <input id="event-type-${eventTypeItem}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${eventTypeItem}">
    <label class="event__type-label  event__type-label--${eventTypeItem}" for="event-type-${eventTypeItem}-1">${capitalize(eventTypeItem)}</label>
  </div>
`;

export const createEventTypeListTemplate = () => /*html*/`
  <div class="event__type-list">
    <fieldset class="event__type-group">
      <legend class="visually-hidden">Event type</legend>
      ${POINT_EVENT_TYPE_ITEMS.map((eventTypeItem) => createEventTypeItemTemplate(eventTypeItem)).join('')}
    </fieldset>
  </div>
`;

// $======================== createOffersList ========================$ //

const createOfferTemplate = ({ name, text, price, isCheckedByDefault }) => /*html*/`
  <div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden" id="event-offer-${name}-1" type="checkbox" name="event-offer-${name}" ${isCheckedByDefault ? 'checked' : ''}>
    <label class="event__offer-label" for="event-offer-${name}-1">
      <span class="event__offer-title">${text}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${price}</span>
    </label>
  </div>
`;

export const createOffersListTemplate = (offers) => /*html*/`
  <div class="event__available-offers">
    ${offers.map((offer) => createOfferTemplate(offer)).join('')}
  </div>
`;

// $======================== createPhotosContainer ========================$ //

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
