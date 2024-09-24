import dayjs from 'dayjs';
import { DATE_FORMAT, TIME_FORMAT, DATE_AND_TIME_FORMAT } from '../const';

// $======================== point utils ========================$ //

//$ date and time functions
const humanizeDate = (date) => date ? dayjs(date).format(DATE_FORMAT) : '';

const humanizeTime = (time) => time ? dayjs(time).format(TIME_FORMAT) : '';

const humanizeDateAndTime = (dateAndTime) => dateAndTime ? dayjs(dateAndTime).format(DATE_AND_TIME_FORMAT) : '';

const humanizeDuration = (duration) => {
  const totalMinutes = Math.floor(duration / 1000 / 60);
  const days = Math.floor(totalMinutes / 1440);
  const hours = Math.floor((totalMinutes % 1440) / 60);
  const minutes = totalMinutes % 60;

  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');

  if (days === 0) {
    return `${formattedHours}H ${formattedMinutes}M`;
  }

  const formattedDays = String(days).padStart(2, '0');
  return `${formattedDays}D ${formattedHours}H ${formattedMinutes}M`;
};

const getDuration = (startTime, endTime) => dayjs(endTime).diff(dayjs(startTime));

const isFuturePoint = (point) => dayjs(point.dateFrom).isAfter(dayjs());
const isPastPoint = (point) => dayjs(point.dateTo).isBefore(dayjs());
const isPresentPoint = (point) => dayjs(point.dateFrom).isBefore(dayjs()) && dayjs(point.dateTo).isAfter(dayjs());

const sortByDay = (pointA, pointB) => dayjs(pointA.dateFrom).diff(dayjs(pointB.dateFrom));

const sortByTime = (pointA, pointB) => {
  const pointADuration = getDuration(pointA.dateFrom, pointA.dateTo);
  const pointBDuration = getDuration(pointB.dateFrom, pointB.dateTo);
  return pointBDuration - pointADuration;
};
const sortByPrice = (pointA, pointB) => pointB.basePrice - pointA.basePrice;


export {
  humanizeDate,
  humanizeTime,
  humanizeDateAndTime,
  humanizeDuration,
  getDuration,
  isFuturePoint,
  isPastPoint,
  isPresentPoint,
  sortByDay,
  sortByTime,
  sortByPrice,
};
