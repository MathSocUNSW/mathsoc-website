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
  <div className="flex justify-center h-full">
    <div className="w-full max-w-md h-full rounded-lg shadow-lg bg-white overflow-hidden animate-pulse flex flex-col">
      {/* Event Image Skeleton (fixed height for consistency) */}
      <div className="w-full h-48 bg-gray-300"></div>

      {/* Card Body Skeleton fills the remaining space */}
      <div className="p-6 flex-grow space-y-4">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
        <div className="h-3 bg-gray-300 rounded w-1/3"></div>
        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
      </div>
    </div>
  </div>
);

export default function EventCarousel() {
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
      <div className="container max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <Carousel opts={{ loop: true, slidesToScroll: 1 }}>
          {/* Use flex and items-stretch to ensure all items match height */}
          <CarouselContent className="flex items-stretch">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="
                  w-full
                  sm:basis-1/1
                  md:basis-1/2
                  lg:basis-1/3
                  xl:basis-1/4
                  px-4
                  py-4
                  flex
                "
              >
                <SkeletonCard />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-between mt-4">
            <CarouselPrevious className="mx-2" />
            <CarouselNext className="mx-2" />
          </div>
        </Carousel>
      </div>
    );
  }

  const futureEvents = events.filter(
    (event) => new Date(event.startTime).getTime() > Date.now()
  );

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
        {/* Again, ensure we use items-stretch here */}
        <CarouselContent className="flex items-stretch">
          {futureEvents.map((event, index) => (
            <CarouselItem
              key={index}
              className="
                w-full
                sm:basis-1/1
                md:basis-1/2
                lg:basis-1/3
                xl:basis-1/4
                px-4
                py-4
                flex
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
                  w-full
                "
              >
                {/* Card container with full height & flex layout */}
                <div className="w-full max-w-md h-full mx-auto rounded-lg shadow-lg bg-white overflow-hidden flex flex-col">
                  {/* Event Image (fixed height for uniformity) */}
                  <div className="relative w-full h-48">
                    <img
                      src={event.eventImage}
                      alt={event.imageDescription}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>

                  {/* Card body expands to fill remaining space */}
                  <div className="p-6 flex-grow flex flex-col">
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

        <div className="flex justify-between mt-4">
          <CarouselPrevious className="mx-2" />
          <CarouselNext className="mx-2" />
        </div>
      </Carousel>
    </div>
  );
}
