"use client";

import React, { useEffect, useState } from "react";
import { EventDetails } from "../(data)/evenData"; // Adjust path
import { fetchEvents } from "../../../lib/api";   // Adjust path to your API fetch
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";                // Adjust path if needed

export default function EventCarousel() {
  // Local state for events and loading indicator
  const [events, setEvents] = useState<EventDetails[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch events on component mount (client-side)
  useEffect(() => {
    (async () => {
      try {
        const data = await fetchEvents();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  // Loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-8">
        <p className="text-white text-lg">Loading events...</p>
      </div>
    );
  }

  // Filter events for only those in the future
  const futureEvents = events.filter(
    (event) => new Date(event.startTime).getTime() > Date.now()
  );

  // If no future events, show a message
  if (futureEvents.length === 0) {
    return (
      <div className="flex justify-center items-center py-8">
        <p className="text-white text-lg">No upcoming events found.</p>
      </div>
    );
  }

  return (
    <div className="w-full py-8 px-12">
      <Carousel
        opts={{
          loop: true,
          slidesToScroll: 1,
        }}
      >
        <CarouselContent>
          {futureEvents.map((event, index) => (
            <CarouselItem key={index} className="basis-1/3 px-6">
              <div className="flex justify-center">
                <div className="max-w-xs rounded-lg shadow-lg bg-white overflow-hidden">
                  {/* Event Image */}
                  <img
                    src={event.eventImage}
                    alt={event.imageDescription}
                    className="w-full h-56 object-cover rounded-t-lg"
                  />

                  {/* Card Body */}
                  <div className="p-6">
                    <h3 className="text-xl text-black font-semibold mb-2">
                      {event.eventName}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {event.locationLabel || "Location not specified"}
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      {new Date(event.startTime).toLocaleString()}
                    </p>
                    <a
                      href={event.eventLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      View Event
                    </a>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Next/Previous buttons */}
        <div className="flex justify-between mt-4">
          <CarouselPrevious className="mx-2" />
          <CarouselNext className="mx-2" />
        </div>
      </Carousel>
    </div>
  );
}
