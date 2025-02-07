"use client";

import React, { useEffect, useState } from "react";
import { EventDetails } from "../(data)/evenData"; // Adjust path if needed
import { fetchEvents } from "../../../lib/api";   // Adjust path to your API fetch
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";                // Adjust path if needed

// Skeleton loader for event cards
const SkeletonCard = () => (
  <div className="flex justify-center">
    <div className="w-full max-w-xs rounded-lg shadow-lg bg-white overflow-hidden animate-pulse">
      {/* Event Image Skeleton */}
      <div className="w-full h-56 bg-gray-300 rounded-t-lg"></div>

      {/* Card Body Skeleton */}
      <div className="p-6 space-y-4">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
        <div className="h-3 bg-gray-300 rounded w-1/3"></div>
        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
      </div>
    </div>
  </div>
);

export default function EventCarousel() {
  // Local state for events and loading
  const [events, setEvents] = useState<EventDetails[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch events on mount (client-side)
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
      <div className="container max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <Carousel opts={{ loop: true, slidesToScroll: 1 }}>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="
                  w-full
                  sm:basis-1/2
                  md:basis-1/3
                  lg:basis-1/4
                  xl:basis-1/5
                  px-4
                  py-4
                "
              >
                <SkeletonCard />
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

  // Filter future events
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
    <div className="container max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <Carousel opts={{ loop: true, slidesToScroll: 1 }}>
        <CarouselContent>
          {futureEvents.map((event, index) => (
            <CarouselItem
              key={index}
              className="
                w-full
                sm:basis-1/2
                md:basis-1/3
                lg:basis-1/4
                xl:basis-1/5
                px-4
                py-4
              "
            >
              <a
                href={event.eventLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  block
                  transform
                  transition-transform
                  hover:scale-105
                  active:scale-95
                  cursor-pointer
                "
              >
                <div className="w-full max-w-xs mx-auto rounded-lg shadow-lg bg-white overflow-hidden">
                  {/* Event Image */}
                  <img
                    src={event.eventImage}
                    alt={event.imageDescription}
                    className="w-full h-auto object-cover rounded-t-lg"
                  />

                  {/* Card Body */}
                  <div className="p-6">
                    <h3 className="text-xl text-black font-semibold mb-2">
                      {event.eventName}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {event.locationLabel || "Location not specified"}
                    </p>
                    <p className="text-sm text-gray-500">
                      {new Date(event.startTime).toLocaleString()}
                    </p>
                  </div>
                </div>
              </a>
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
