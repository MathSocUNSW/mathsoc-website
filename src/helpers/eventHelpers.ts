import moment from "moment";

import { EventDetails } from "src/data/eventData";
import contentful from "contentful";

/**
 * Uses moment to parse `date` string into a unix timestamp
 *
 * @param date in the format YYYY-MM-DDThh:mm[-]HH:mm
 * @returns unix timestamp
 */
export const getDateUnix = (date: string): number => {
  return moment(date).valueOf();
};

/**
 * Predicate which checks that events are in the past
 *
 * @param {EventDetails} x - event to be checked
 * @returns {boolean} true if in the past, false otherwise
 */
export const pastEventsFilter = (x: EventDetails): boolean =>
  getDateUnix(x.endTime) - moment().valueOf() < 0;

export const upcomingEventsFilter = (x: EventDetails): boolean => !pastEventsFilter(x);

export const compareEndDateDecreasing = (x: EventDetails, y: EventDetails): number => {
  if (getDateUnix(x.endTime) > getDateUnix(y.endTime)) return -1;
  if (getDateUnix(x.endTime) < getDateUnix(y.endTime)) return 1;
  return 0;
};

export const compareStartDateDecreasing = (x: EventDetails, y: EventDetails): number => {
  if (getDateUnix(x.startTime) > getDateUnix(y.startTime)) return -1;
  if (getDateUnix(x.startTime) < getDateUnix(y.startTime)) return 1;
  return 0;
};

/**
 * Comparator: sort by decreasing end date, then decreasing start date
 *
 * @param {EventDetails} x - first event
 * @param {EventDetails} y - second event
 * @returns {number} 1 if x > y, -1 if x < y, 0 if x == y
 */
export const eventsComparatorDecreasing = (x: EventDetails, y: EventDetails): number => {
  // primarily sort by decreasing end date
  const byEnd = compareEndDateDecreasing(x, y);
  if (byEnd != 0) return byEnd;
  // sort same end dates by decreasing start date
  const byStart = compareStartDateDecreasing(x, y);
  return byStart;
};

/**
 * Comparator: sort by increasing end date, then increasing start date
 *
 * @param {EventDetails} x - first event
 * @param {EventDetails} y - second event
 * @returns {number} 1 if x < y, -1 if x > y, 0 if x == y
 */
export const eventsComparatorIncreasing = (x: EventDetails, y: EventDetails): number =>
  eventsComparatorDecreasing(y, x);

/**
 * Returns the formatted date to display on an event card
 * @param {string} startTime The starting time of the event in full ISO 8601 date format
 * @param {string} endTime The ending time of the event in full ISO 8601 date format
 */
export const formatDisplayDate = (startTime: string, endTime: string): string => {
  const startDate: string = moment(startTime).format("D MMM YYYY");
  const endDate: string = moment(endTime).format("D MMM YYYY");
  if (startDate === endDate) {
    const startHourMin = moment(startTime).format("h:mm a");
    const endHourMin = moment(endTime).format("h:mm a");
    return `${startDate}, ${startHourMin} - ${endHourMin}`;
  } else {
    return `${startDate} - ${endDate}`;
  }
};
