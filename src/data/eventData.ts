// NOTE: if a locationURL is not provided, the links for detected social keywords (e.g. YouTube, Discord) will be automatically added

type day =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "13"
  | "14"
  | "15"
  | "16"
  | "17"
  | "18"
  | "19"
  | "20"
  | "21"
  | "22"
  | "23"
  | "24"
  | "25"
  | "26"
  | "27"
  | "28"
  | "29"
  | "30"
  | "31";

type month = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";

type year = "2021" | "2022";

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
