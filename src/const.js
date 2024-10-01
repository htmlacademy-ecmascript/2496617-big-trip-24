// $======================== const ========================$ //

const POINT_EVENT_TYPE_ITEMS = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

const DATE_FORMAT = 'MMM D';
const TIME_FORMAT = 'HH : mm';
const DATE_AND_TIME_FORMAT = 'DD/MM/YY HH:mm';
const DURATION_FORMAT = 'D HH mm';

const BLANK_POINT = {
  id: '',
  basePrice: 0,
  dateFrom: '',
  dateTo: '',
  destination: '',
  isFavorite: false,
  offers: [
    ''
  ],
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

export {
  POINT_EVENT_TYPE_ITEMS, BLANK_POINT, DATE_FORMAT, TIME_FORMAT, DATE_AND_TIME_FORMAT, DURATION_FORMAT, Mode, SortType, DateType
};
