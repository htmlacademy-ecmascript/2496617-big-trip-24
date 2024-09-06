// $======================== const ========================$ //

const FILTER_TYPES = ['everything', 'future', 'present', 'past'];
const SORT_TYPES = ['day', 'event', 'time', 'price', 'offers'];
const POINT_EVENT_TYPE_ITEMS = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

const OFFERS = [
  {
    type: 'flight',
    offers: [
      {
        id: 'luggage',
        title: 'Add luggage',
        price: 50,
      },
      {
        id: 'comfort',
        title: 'Switch to comfort',
        price: 80,
      },
      {
        id: 'meal',
        title: 'Add meal',
        price: 15,
      },
      {
        id: 'seats',
        title: 'Choose seats',
        price: '5',
      },
      {
        id: 'train',
        title: 'Travel by train',
        price: '40',
      },
    ]
  },
  {
    type: 'taxi',
    offers: [
      {
        id: 'uber',
        title: 'Order Uber',
        price: 20
      }
    ]
  },
  {
    type: 'drive',
    offers: [
      {
        id: 'car',
        title: 'Rent a car',
        price: 200,
      },
    ]
  },
  {
    type: 'Check-in',
    offers: [
      {
        id: 'breakfast',
        title: 'Add breakfast',
        price: 50,
      },
    ]
  },
  {
    type: 'Sightseeing',
    offers: [
      {
        id: 'tickets',
        title: 'Book tickets',
        price: 40,
      },
      {
        id: 'lunch',
        title: 'Lunch in city',
        price: 30,
      },
    ]
  },
];

const DATE_FORMAT = 'D MMMM';
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
    'flight'
  ],
  type: 'flight'
};

export {
  FILTER_TYPES, SORT_TYPES, POINT_EVENT_TYPE_ITEMS, OFFERS, BLANK_POINT, DATE_FORMAT, TIME_FORMAT, DATE_AND_TIME_FORMAT
};
