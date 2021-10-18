import moment from "moment";

import { eventDetails } from "src/data/eventData";

/**
 * Uses moment to parse `date` string into a unix timestamp
 *
 * @param date format of DD-MM-YYYY
 * @returns unix timestamp
 */
export const getDateUnix = (date: string): number => {
  return moment(date, "DD-MM-YYYY").valueOf();
};

/**
 * Predicate which checks that events are in the past
 *
 * @param {eventDetails} x - event to be checked
 * @returns {boolean} true if in the past, false otherwise
 */
export const pastEventsFilter = (x: eventDetails): boolean =>
  getDateUnix(x.endDate) - moment().valueOf() < 0;

export const upcomingEventsFilter = (x: eventDetails): boolean => !pastEventsFilter(x);

export const compareEndDateDecreasing = (x: eventDetails, y: eventDetails): number => {
  if (getDateUnix(x.endDate) > getDateUnix(y.endDate)) return -1;
  if (getDateUnix(x.endDate) < getDateUnix(y.endDate)) return 1;
  return 0;
};

export const compareStartDateDecreasing = (x: eventDetails, y: eventDetails): number => {
  if (getDateUnix(x.startDate) > getDateUnix(y.startDate)) return -1;
  if (getDateUnix(x.startDate) < getDateUnix(y.startDate)) return 1;
  return 0;
};

/**
 * Comparator: sort by decreasing end date, then decreasing start date
 *
 * @param {eventDetails} x - first event
 * @param {eventDetails} y - second event
 * @returns {number} 1 if x > y, -1 if x < y, 0 if x == y
 */
export const eventsComparatorDecreasing = (x: eventDetails, y: eventDetails): number => {
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
 * @param {eventDetails} x - first event
 * @param {eventDetails} y - second event
 * @returns {number} 1 if x < y, -1 if x > y, 0 if x == y
 */
export const eventsComparatorIncreasing = (x: eventDetails, y: eventDetails): number =>
  eventsComparatorDecreasing(y, x);
