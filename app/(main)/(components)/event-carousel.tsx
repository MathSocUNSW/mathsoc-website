"use client";

import React, { useEffect, useState } from "react";
import { EventDetails } from "../(data)/evenData";
import { fetchEvents } from "../../../lib/api";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Skeleton loader for event cards
const SkeletonCard = () => (
  <div className="block w-full transform cursor-pointer">
    <div className="w-full max-w-md h-full mx-auto rounded-lg shadow-lg opacity-90 bg-gray-700 overflow-hidden flex flex-col animate-pulse">
      {/* Event Image Skeleton */}
      <div className="relative w-full h-48 bg-gray-500"></div>

      {/* Card body skeleton */}
      <div className="p-6 flex-grow flex flex-col space-y-3">
        <div className="h-6 bg-gray-500 rounded w-3/4"></div>
        <div className="h-4 bg-gray-500 rounded w-1/2"></div>
        <div className="h-4 bg-gray-500 rounded w-2/3"></div>
      </div>
    </div>
  </div>
);

export default function EventCarousel() {
  const [events, setEvents] = useState<EventDetails[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

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
      <div className="w-screen overflow-visible py-8 relative">
        <Carousel opts={{ loop: true, slidesToScroll: 1 }}>
          <CarouselContent className="flex items-stretch overflow-visible">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="
                  w-full
                  sm:basis-1/1
                  md:basis-1/2
                  lg:basis-1/3
                  xl:basis-1/4
                  py-4
                  flex
                "
              >
                <SkeletonCard />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10" />
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
    <div className="w-screen overflow-visible py-8 relative">
      <Carousel
        plugins={[plugin.current]}
        opts={{ loop: true, slidesToScroll: 1 }}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current?.play}
      >
        <CarouselContent className="flex items-stretch overflow-visible">
          {futureEvents.map((event, index) => (
            <CarouselItem
              key={index}
              className="
                w-full
                sm:basis-1/1
                md:basis-1/2
                lg:basis-1/3
                xl:basis-1/4
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
                <div className="w-full max-w-md h-full mx-auto rounded-lg shadow-lg opacity-90 bg-gray-700 overflow-hidden flex flex-col">
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
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10" />
        <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10" />
      </Carousel>
    </div>
  );
}
