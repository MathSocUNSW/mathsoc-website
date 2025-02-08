// app/lib/api.ts (or wherever this file lives)
// If this file is used by a Client Component ("use client"), you MUST use NEXT_PUBLIC_...
// If it’s purely server code, you can omit NEXT_PUBLIC_ and do FB_API_TOKEN instead.

import { EventDetails } from "../app/(main)/(data)/evenData";

const fetchFBEventData = async (): Promise<any[]> => {
  // Check the token
  const token = process.env.NEXT_PUBLIC_FB_API_TOKEN;  
  console.log("Facebook API Token:", token);

  if (!token) {
    console.error("No token found. Make sure NEXT_PUBLIC_FB_API_TOKEN is set in .env!");
    return [];
  }

  const url = `https://graph.facebook.com/v16.0/unswmathsoc/events?fields=name,id,description,cover,place,start_time,end_time&access_token=${token}`;
  
  try {
    const res = await fetch(url, { method: "GET" });
    if (!res.ok) {
      console.error("Facebook API HTTP error:", res.status, res.statusText);
      return [];
    }

    const resJSON = await res.json();
    if (resJSON.error) {
      console.error("Error fetching data from Facebook API:", resJSON.error);
      return [];
    }

    console.log("Fetched data:", resJSON);
    return resJSON.data || [];
  } catch (err) {
    console.error("Error during API call:", err);
    return [];
  }
};

export const fetchEvents = async (): Promise<EventDetails[]> => {
  const eventData: any[] = await fetchFBEventData();
  return eventData.map((item) => ({
    eventName: item.name,
    eventLink: "https://www.facebook.com/events/" + item.id,
    eventDescription: item.description || "No description available.",
    eventImage: item.cover?.source || "/images/default-event-image.jpg",
    imageDescription: item.name + " Promotional Image",
    locationLabel: item.place?.name || "Location not specified",
    startTime: item.start_time,
    endTime: item.end_time || item.start_time,
  }));
};
