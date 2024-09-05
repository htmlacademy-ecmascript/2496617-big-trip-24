import dayjs from 'dayjs';

// $======================== util ========================$ //

const capitalize = (string) => string[0].toUpperCase() + string.slice(1);

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const DATE_FORMAT = 'D MMMM';
const TIME_FORMAT = 'HH : mm';
const DATE_AND_TIME_FORMAT = 'DD/MM/YY HH:mm';

const humanizeDate = (date) => date ? dayjs(date).format(DATE_FORMAT) : '';
const humanizeTime = (time) => time ? dayjs(time).format(TIME_FORMAT) : '';
const humanizeDateAndTime = (dateAndTime) => dateAndTime ? dayjs(dateAndTime).format(DATE_AND_TIME_FORMAT) : '';

const getDuration = (startTime, endTime) => {
  const date1 = dayjs(startTime);
  const date2 = dayjs(endTime);
  return date2.diff(date1);
};

export { capitalize, getRandomInt, humanizeDate, humanizeTime, humanizeDateAndTime, getDuration };
