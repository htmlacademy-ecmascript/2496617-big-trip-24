import { getRandomInt } from '../util';

// $======================== mockDestinations ========================$ //

const mockDestinations = [
  {
    id: '',
    description: 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
    name: 'Chamonix',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInt(1, 100)}`,
        description: 'Chamonix parliament building'
      }
    ]
  },
  {
    id: '',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.',
    name: 'Geneva',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInt(1, 100)}`,
        description: 'Chamonix parliament building'
      }
    ]
  },
  {
    id: '',
    description: 'Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
    name: 'Amsterdam',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInt(1, 100)}`,
        description: 'Chamonix parliament building'
      }
    ]
  },
];

export { mockDestinations };
