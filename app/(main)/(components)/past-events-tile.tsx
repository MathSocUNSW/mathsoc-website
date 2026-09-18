"use client";

import React from "react";
import { EventDetails, formatEventTime } from "../(data)/evenData"; // Adjust path if needed
import Image from "next/image";

export default function PastEventsGrid({ events }: { events: EventDetails[] }) {
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
        <a
          key={index}
          href={event.eventLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-md mx-auto rounded-lg shadow-lg bg-gray-700 opacity-90 overflow-hidden flex flex-col transform transition-transform hover:scale-105 active:scale-95"
        >
          <div className="relative w-full h-48">
            <Image
              src={event.eventImage}
              alt={event.imageDescription}
              fill
              sizes="(max-width: 768px) 100vw, 448px"
              className="object-cover"
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
              {formatEventTime(event.startTime)}
            </p>
          </div>
        </a>
      ))}
      </div>
    </div>
  );
}
