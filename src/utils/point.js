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

export { humanizeDate, humanizeTime, humanizeDateAndTime, getDuration, };
