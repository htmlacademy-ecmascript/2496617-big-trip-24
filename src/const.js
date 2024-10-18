// $======================== const ========================$ //

const POINT_EVENT_TYPE_ITEMS = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

const Format = {
  DATE: 'MMM D',
  TIME: 'HH:mm',
  DATE_AND_TIME: 'DD/MM/YY HH:mm',
  INFO_DATE: 'D MMM',
};

const BLANK_POINT = {
  basePrice: 0,
  dateFrom: '',
  dateTo: '',
  destination: '',
  isFavorite: false,
  offers: [],
  type: 'flight'
};

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING'
};

const SortType = {
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFERS: 'offers',
};

const DateType = {
  START: 'start',
  END: 'end'
};

const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  INIT: 'INIT'
};

const UserAction = {
  UPDATE_POINT: 'UPDATE_POINT',
  ADD_POINT: 'ADD_POINT',
  DELETE_POINT: 'DELETE_POINT'
};

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past'
};

const NoPointsTextType = {
  [FilterType.EVERYTHING]: 'Click New Event to create your first point',
  [FilterType.FUTURE]: 'There are no future events now',
  [FilterType.PAST]: 'There are no past events now',
  [FilterType.PRESENT]: 'There are no present events now',
};

const Method = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
};

const URL = {
  POINTS: 'points',
  OFFERS: 'offers',
  DESTINATIONS: 'destinations'
};

const AUTHORIZATION = 'Basic JZizjDBB1s';
const END_POINT = 'https://24.objects.htmlacademy.pro/big-trip';

const TimeLimit = {
  LOWER_LIMIT: 350,
  UPPER_LIMIT: 1000,
};

export {
  POINT_EVENT_TYPE_ITEMS,
  BLANK_POINT,
  Format,
  Mode,
  SortType,
  DateType,
  UpdateType,
  UserAction,
  FilterType,
  NoPointsTextType,
  Method,
  URL,
  TimeLimit,
  AUTHORIZATION,
  END_POINT
};
