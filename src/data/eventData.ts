// NOTE: if a locationURL is not provided, the links for detected social keywords (e.g. YouTube, Discord) will be automatically added
export interface EventDetails {
  eventName: string;
  eventLink: string; // link to Facebook event
  eventDescription: string;
  eventImage: string; // path to event image
  imageDescription: string; // alt for the image
  locationLabel: string; // event location
  locationLink?: string; // (optional) link for location
  startTime: string; // start date for rendering algorithm
  endTime: string; // end date for rendering algorithm
}
