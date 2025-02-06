import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { EventDetails } from "../(data)/evenData"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface EventCarouselProps {
  events: EventDetails[];
}

const EventCarousel: React.FC<EventCarouselProps> = ({ events }) => {
  // Filter events to include only those in the future
  const futureEvents = events.filter(event => new Date(event.startTime).getTime() > Date.now());

  return (
    <div className="w-full py-8 px-48">
      <Carousel
        opts={{
          loop: true,
          slidesToScroll: 1,
        }}
      >
        <CarouselContent>
          {futureEvents.map((event, index) => (
            <CarouselItem className="basis-1/3 px-2" key={index}> {/* Adjusted basis and added px-2 for reduced spacing */}
              <div className="flex justify-center">
                <div className="max-w-xs rounded-lg shadow-lg bg-white overflow-hidden">
                  <img
                    src={event.eventImage}
                    alt={event.imageDescription}
                    className="w-full h-56 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-xl text-black font-semibold mb-2">{event.eventName}</h3>
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

        <div className="flex justify-between mt-4"> {/* Added flex container for better button alignment */}
          <CarouselPrevious className="mx-2"> {/* Reduced margin between buttons */}
            <ArrowLeft className="h-4 w-4" />
          </CarouselPrevious>

          <CarouselNext className="mx-2"> {/* Reduced margin between buttons */}
            <ArrowRight className="h-4 w-4" />
          </CarouselNext>
        </div>
      </Carousel>
    </div>
  );
}

export default EventCarousel;
