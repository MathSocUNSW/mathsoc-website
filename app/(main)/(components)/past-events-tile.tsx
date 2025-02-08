"use client";

import React, { useEffect, useState } from "react";
import { EventDetails } from "../(data)/evenData"; // Adjust path if needed
import { fetchEvents } from "../../../lib/api";   // Adjust path to your API fetch

// Skeleton loader for event cards
const SkeletonCard = () => (
  <div className="w-full max-w-md h-full rounded-lg shadow-lg bg-gray-700 opacity-90 ite overflow-hidden animate-pulse flex flex-col">
    <div className="w-full h-48 bg-gray-300"></div>
    <div className="p-6 flex-grow space-y-4">
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      <div className="h-3 bg-gray-300 rounded w-1/2"></div>
      <div className="h-3 bg-gray-300 rounded w-1/3"></div>
    </div>
  </div>
);

export default function PastEventsGrid() {
  const [events, setEvents] = useState<EventDetails[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }

  const pastEvents = events.filter(
    (event) => new Date(event.startTime).getTime() < Date.now()
  );

  if (pastEvents.length === 0) {
    return (
      <div className="flex justify-center items-center py-8">
        <p className="text-white text-lg">No past events found.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {pastEvents.map((event, index) => (
          <div
            key={index}
            className="w-full max-w-md mx-auto rounded-lg shadow-lg bg-gray-700 opacity-90 overflow-hidden flex flex-col transform transition-transform hover:scale-105 active:scale-95"
          >
            <div className="relative w-full h-48">
              <img
                src={event.eventImage}
                alt={event.imageDescription}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl text-white font-semibold mb-2">
                {event.eventName}
              </h3>
              <p className="text-sm text-white mb-2">
                {event.locationLabel || "Location not specified"}
              </p>
              <p className="text-sm text-white">
                {new Date(event.startTime).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
