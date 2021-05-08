import moment from "moment";

import { eventDetails } from "src/data/eventData";

/**
 * Uses moment to parse `date` string into a unix timestamp
 * @param date format of DD-MM-YYYY
 * @returns
 */
export const getDateUnix = (date: string): number => {
  return moment(date, "DD-MM-YYYY").valueOf();
};

export const sortEndDateDecreasing = (x: eventDetails, y: eventDetails): number => {
  if (getDateUnix(x.endDate) > getDateUnix(y.endDate)) return -1;
  if (getDateUnix(x.endDate) < getDateUnix(y.endDate)) return 1;
  return 0;
};

export const sortStartDateDecreasing = (x: eventDetails, y: eventDetails): number => {
  if (getDateUnix(x.startDate) > getDateUnix(y.startDate)) return -1;
  if (getDateUnix(x.startDate) < getDateUnix(y.startDate)) return 1;
  return 0;
};
