import { EventDetails } from "../app/(main)/(data)/evenData";  // Adjust the import path based on where you put your eventData.ts

const fetchFBEventData = async (): Promise<any[]> => {
    // Log the token to ensure it's correctly loaded
    console.log("Facebook API Token:", process.env.FB_API_TOKEN); 
  
    const url =
      "https://graph.facebook.com/v14.0/unswmathsoc/events?fields=name%2Cid%2Cdescription%2Ccover%2Cplace%2Cstart_time%2Cend_time&access_token=" +
      process.env.REACT_APP_FB_PAGE_TOKEN;
  
    let eventData: any[] = [];
    
    try {
      const res = await fetch(url, {
        method: "GET",
      });
  
      const resJSON = await res.json();
  
      if (resJSON.error) {
        console.error("Error fetching data from Facebook API:", resJSON.error);
        return [];
      }
  
      console.log("Fetched data:", resJSON); // Log the response to see the structure of the data
      eventData = resJSON.data || [];
    } catch (err) {
      console.error("Error during API call:", err);
    }
    
    return eventData;
  };
  
  

/**
 * Fetch events from Facebook API and map them to your EventDetails structure.
 */
export const fetchEvents = async (): Promise<EventDetails[]> => {
  const eventData: any[] = await fetchFBEventData();
  return eventData.map((item) => {
    const eventDetails: EventDetails = {
      eventName: item.name,
      eventLink: "https://www.facebook.com/events/" + item.id,
      eventDescription: item.description || "No description available.",
      eventImage: item.cover?.source || "/images/default-event-image.jpg", // Default image if not found
      imageDescription: item.name + " Promotional Image",
      locationLabel: item.place?.name || "Location not specified",
      startTime: item.start_time,
      endTime: item.end_time || item.start_time,
    };
    return eventDetails;
  });
};
