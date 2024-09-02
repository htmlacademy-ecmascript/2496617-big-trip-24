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

const PHOTOS_PATHS = [
  'img/photos/1.jpg',
  'img/photos/2.jpg',
  'img/photos/3.jpg',
  'img/photos/4.jpg',
  'img/photos/5.jpg',
];

const PointIconSrc = {
  TAXI: 'img/icons/taxi.png',
  FLIGHT: 'img/icons/flight.png',
  DRIVE: 'img/icons/drive.png',
};

const POINTS = [
  {
    date: 'MAR 18',
    iconSrc: PointIconSrc.TAXI,
    title: 'Taxi Amsterdam',
    startTime: '10:30',
    endTime: '11:00',
    duration: '30M',
    price: '20',
    offers: [
      {
        offerTitle: 'Order Uber',
        offerPrice: '20',
      },
    ]
  },
  {
    date: 'MAR 18',
    iconSrc: PointIconSrc.FLIGHT,
    title: 'Flight Chamonix',
    startTime: '12:25',
    endTime: '13:35',
    duration: '01H 10M',
    price: '160',
    offers: [
      {
        offerTitle: 'Add luggage',
        offerPrice: '50',
      },
      {
        offerTitle: 'Switch to comfort',
        offerPrice: '80',
      },
    ]
  },
  {
    date: 'MAR 18',
    iconSrc: PointIconSrc.DRIVE,
    title: 'Drive Chamonix',
    startTime: '14:30',
    endTime: '16:05',
    duration: '01H 35M',
    price: '160',
    offers: [
      {
        offerTitle: 'Rent a car',
        offerPrice: '200',
      },
    ]
  },
];


export {FILTER_TYPES, SORT_TYPES, POINT_EVENT_TYPE_ITEMS, OFFERS, PHOTOS_PATHS, POINTS };
