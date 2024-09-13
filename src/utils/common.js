// $======================== common utils ========================$ //

const isEscapeKey = (event) => event.key === 'Escape';

const capitalize = (value) => value[0].toUpperCase() + value.slice(1);

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomArrayItem = (items) => items[getRandomInt(0, items.length - 1)];


export { isEscapeKey, capitalize, getRandomInt, getRandomArrayItem };
