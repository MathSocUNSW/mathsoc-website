import { EventDetails } from "../app/(main)/(data)/evenData";

// Define the expected structure of a Facebook event response
interface FBEvent {
  id: string;
  name: string;
  description?: string;
  cover?: { source: string };
  place?: { name: string };
  start_time: string;
  end_time?: string;
}

// How often Facebook events are re-fetched; pages using them regenerate on the same interval
const EVENTS_REVALIDATE_SECONDS = 300;

// Server-only: import from server components so the token never reaches the browser
const fetchFBEventData = async (): Promise<FBEvent[]> => {
  const token = process.env.NEXT_PUBLIC_FB_API_TOKEN;  

  if (!token) {
    console.error("No token found. Make sure NEXT_PUBLIC_FB_API_TOKEN is set in .env!");
    return [];
  }

  const url = `https://graph.facebook.com/v16.0/unswmathsoc/events?fields=name,id,description,cover,place,start_time,end_time&access_token=${token}`;
  
  try {
    const res = await fetch(url, { method: "GET", next: { revalidate: EVENTS_REVALIDATE_SECONDS } });
    if (!res.ok) {
      console.error("Facebook API HTTP error:", res.status, res.statusText);
      return [];
    }

    const resJSON = await res.json();
    if (resJSON.error) {
      console.error("Error fetching data from Facebook API:", resJSON.error);
      return [];
    }
    return resJSON.data as FBEvent[]; // Explicitly cast response data to `FBEvent[]`
  } catch (err) {
    console.error("Error during API call:", err);
    return [];
  }
};

export const fetchEvents = async (): Promise<EventDetails[]> => {
  const eventData: FBEvent[] = await fetchFBEventData();
  return eventData.map((item) => ({
    eventName: item.name,
    eventLink: `https://www.facebook.com/events/${item.id}`,
    eventDescription: item.description || "No description available.",
    eventImage: item.cover?.source || "/images/placeholder.png",
    imageDescription: `${item.name} Promotional Image`,
    locationLabel: item.place?.name || "Location not specified",
    startTime: item.start_time,
    endTime: item.end_time || item.start_time,
  }));
};
