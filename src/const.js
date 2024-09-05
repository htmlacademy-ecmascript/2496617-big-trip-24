// $======================== data ========================$ //

const FILTER_TYPES = ['everything', 'future', 'present', 'past'];

const SORT_TYPES = ['day', 'event', 'time', 'price', 'offers'];

const POINT_EVENT_TYPE_ITEMS = [
  'taxi',
  'bus',
  'train',
  'ship',
  'drive',
  'flight',
  'check-in',
  'sightseeing',
  'restaurant'
];

const OFFERS = [
  {
    name: 'luggage',
    text: 'Add luggage',
    price: '50',
    isCheckedByDefault: true,
  },
  {
    name: 'comfort',
    text: 'Switch to comfort',
    price: '80',
    isCheckedByDefault: true,
  },
  {
    name: 'meal',
    text: 'Add meal',
    price: '15',
    isCheckedByDefault: false,
  },
  {
    name: 'seats',
    text: 'Choose seats',
    price: '5',
    isCheckedByDefault: false,
  },
  {
    name: 'train',
    text: 'Travel by train',
    price: '40',
    isCheckedByDefault: false,
  },
];


export {FILTER_TYPES, SORT_TYPES, POINT_EVENT_TYPE_ITEMS, OFFERS};
