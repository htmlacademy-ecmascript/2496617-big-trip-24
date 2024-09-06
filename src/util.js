import dayjs from 'dayjs';
import { DATE_FORMAT, TIME_FORMAT, DATE_AND_TIME_FORMAT } from './const';

// $======================== util ========================$ //

const capitalize = (string) => string[0].toUpperCase() + string.slice(1);

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//$ date and time functions
const humanizeDate = (date) => date ? dayjs(date).format(DATE_FORMAT) : '';
const humanizeTime = (time) => time ? dayjs(time).format(TIME_FORMAT) : '';
const humanizeDateAndTime = (dateAndTime) => dateAndTime ? dayjs(dateAndTime).format(DATE_AND_TIME_FORMAT) : '';

const getDuration = (startTime, endTime) => {
  const date1 = dayjs(startTime);
  const date2 = dayjs(endTime);
  return date2.diff(date1);
};

export { capitalize, getRandomInt, humanizeDate, humanizeTime, humanizeDateAndTime, getDuration };
