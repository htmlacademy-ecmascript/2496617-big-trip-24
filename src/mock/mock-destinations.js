import { getRandomInt } from '../util';

// $======================== mockDestinations ========================$ //

const mockDestinations = [
  {
    id: 'chamonix',
    description: 'Chamonix-Mont-Blanc (usually shortened to Chamonix) is a resort area near the junction of France, Switzerland and Italy. At the base of Mont Blanc, the highest summit in the Alps, it\'s renowned for its skiing.',
    name: 'Chamonix',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInt(1, 100)}`,
        description: 'Chamonix parliament building'
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInt(1, 100)}`,
        description: 'Chamonix parliament building'
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInt(1, 100)}`,
        description: 'Chamonix parliament building'
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInt(1, 100)}`,
        description: 'Chamonix parliament building'
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInt(1, 100)}`,
        description: 'Chamonix parliament building'
      },
    ]
  },
  {
    id: 'geneva',
    description: 'Nestled along the shores of Lake Geneva, this cosmopolitan city is known for its stunning alpine views, international organizations, and rich cultural scene. Visitors can enjoy world-class museums, tranquil parks, and the iconic Jet d\'Eau fountain.',
    name: 'Geneva',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInt(1, 100)}`,
        description: 'Chamonix parliament building'
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInt(1, 100)}`,
        description: 'Chamonix parliament building'
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInt(1, 100)}`,
        description: 'Chamonix parliament building'
      }
    ]
  },
  {
    id: 'amsterdam',
    description: 'Famed for its picturesque canals, historic architecture, and vibrant cultural life, Amsterdam offers a blend of art, history, and modernity. Explore its world-renowned museums, bike-friendly streets, and charming neighborhoods like Jordaan and the Red Light District',
    name: 'Amsterdam',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInt(1, 100)}`,
        description: 'Chamonix parliament building'
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInt(1, 100)}`,
        description: 'Chamonix parliament building'
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInt(1, 100)}`,
        description: 'Chamonix parliament building'
      },
    ]
  },
];

export { mockDestinations };
