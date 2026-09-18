// src/data/eventData.ts

export interface EventDetails {
    eventName: string;
    eventLink: string;
    eventDescription: string;
    eventImage: string;
    imageDescription: string;
    locationLabel: string | null;
    startTime: string;
    endTime: string;
  }
  
// Fixed locale and timezone so server-rendered and hydrated dates match
export const formatEventTime = (time: string) =>
  new Date(time).toLocaleString("en-AU", { timeZone: "Australia/Sydney" });
