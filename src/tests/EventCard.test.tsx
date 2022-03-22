import { render, screen } from "@testing-library/react";
import EventCard from "../components/EventCard";
import * as eventHelpers from "../helpers/eventHelpers";

it("contains all event details", () => {
  jest
    .spyOn(eventHelpers, "formatDisplayDate")
    .mockImplementation((startTime, endTime) => `${startTime} - ${endTime}`);
  render(
    <EventCard
      eventName="dummy name"
      eventDescription="dummy description"
      eventImage="dummy-image-src"
      imageDescription="dummy image description"
      eventLink="dummy-event-link"
      locationLabel="dummy location"
      locationLink="dummy-location-link"
      startTime="start time"
      endTime="end time"
    />
  );
  const card = screen.getByTestId("event-card");
  const image = screen.getByAltText("dummy image description") as HTMLImageElement;
  expect(image.src).toContain("dummy-image-src");
  expect(card).toContainElement(image);
  expect(card).toHaveTextContent("dummy name");
  expect(card).toHaveTextContent("dummy description");
  expect(card).toHaveTextContent("dummy location");
  expect(card).toHaveTextContent("start time - end time");
});
