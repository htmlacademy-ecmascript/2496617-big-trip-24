import dayjs from 'dayjs';
import { DATE_FORMAT, TIME_FORMAT, DATE_AND_TIME_FORMAT } from '../const';

// $======================== point utils ========================$ //

//$ date and time functions
const humanizeDate = (date) => date ? dayjs(date).format(DATE_FORMAT) : '';
const humanizeTime = (time) => time ? dayjs(time).format(TIME_FORMAT) : '';
const humanizeDateAndTime = (dateAndTime) => dateAndTime ? dayjs(dateAndTime).format(DATE_AND_TIME_FORMAT) : '';

const getDuration = (startTime, endTime) => {
  const date1 = dayjs(startTime);
  const date2 = dayjs(endTime);
  return date2.diff(date1);
};

const isFuturePoint = (point) => dayjs(point.dateFrom).isAfter(dayjs());
const isPastPoint = (point) => dayjs(point.dateTo).isBefore(dayjs());
const isPresentPoint = (point) => dayjs(point.dateFrom).isBefore(dayjs()) && dayjs(point.dateTo).isAfter(dayjs());


export {
  humanizeDate,
  humanizeTime,
  humanizeDateAndTime,
  getDuration,
  isFuturePoint,
  isPastPoint,
  isPresentPoint
};
