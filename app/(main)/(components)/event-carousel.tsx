"use client";

import React from "react";
import { EventDetails, formatEventTime } from "../(data)/evenData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

// Adjusting for mobile
const CENTRE_WHEN_FITS = ["", "justify-center", "md:justify-center", "lg:justify-center", "xl:justify-center"];

export default function EventCarousel({ events }: { events: EventDetails[] }) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

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
      >
        <CarouselContent
          className={`flex items-stretch overflow-visible ${
            CENTRE_WHEN_FITS[futureEvents.length] ?? ""
          }`}
        >
          {futureEvents.map((event, index) => (
            <CarouselItem
              key={index}
              className="
                w-full
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
                    <Image
                      src={event.eventImage}
                      alt={event.imageDescription}
                      fill
                      sizes="(max-width: 768px) 100vw, 448px"
                      className="object-cover transition-opacity duration-500 opacity-0"
                      onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
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
