import dayjs from 'dayjs';

// $======================== util ========================$ //

const capitalize = (string) => string[0].toUpperCase() + string.slice(1);

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const DATE_FORMAT = 'D MMMM';
const TIME_FORMAT = 'HH : mm';

const humanizePointDate = (date) => date ? dayjs(date).format(DATE_FORMAT) : '';
const humanizePointTime = (time) => time ? dayjs(time).format(TIME_FORMAT) : '';

const getDuration = (startTime, endTime) => {
  const date1 = dayjs(startTime);
  const date2 = dayjs(endTime);
  return date2.diff(date1);
};

export { capitalize, getRandomInt, humanizePointDate, humanizePointTime, getDuration };
