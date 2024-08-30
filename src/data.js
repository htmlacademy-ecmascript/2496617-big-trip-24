// $======================== data ========================$ //

const EVENT_TYPE_ITEMS = [
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

const PHOTOS_PATHS = [
  'img/photos/1.jpg',
  'img/photos/2.jpg',
  'img/photos/3.jpg',
  'img/photos/4.jpg',
  'img/photos/5.jpg',
];


export { EVENT_TYPE_ITEMS, OFFERS, PHOTOS_PATHS };
