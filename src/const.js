// $======================== const ========================$ //

const SORT_TYPES = ['day', 'event', 'time', 'price', 'offers'];
const POINT_EVENT_TYPE_ITEMS = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

const DATE_FORMAT = 'MMM D';
const TIME_FORMAT = 'HH : mm';
const DATE_AND_TIME_FORMAT = 'DD/MM/YY HH:mm';

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

export {
  SORT_TYPES, POINT_EVENT_TYPE_ITEMS, BLANK_POINT, DATE_FORMAT, TIME_FORMAT, DATE_AND_TIME_FORMAT
};
