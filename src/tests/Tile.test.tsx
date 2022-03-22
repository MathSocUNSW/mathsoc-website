import { fireEvent, render, screen } from "@testing-library/react";
import { revisionData } from "./data/tileData";
import { checkTilePage } from "./helpers/testHelpers";
import Tile from "../components/Tile";

test("displays appropriate items when clicking through", () => {
  render(<Tile courseCode="MATH1081" courseTitle="Discrete Math" revisionLinks={revisionData} />);
  const tile = screen.getByTestId("tile");
  const exploreButton = screen.getByText("Explore") as HTMLButtonElement;
  checkTilePage("MATH1081", "Discrete Math", revisionData, 0, tile, exploreButton);

  fireEvent.click(exploreButton);
  checkTilePage("MATH1081", "Discrete Math", revisionData, 1, tile, exploreButton);

  const leftButton = screen.getByRole("previous");
  const rightButton = screen.getByRole("next");
  fireEvent.click(rightButton);
  checkTilePage("MATH1081", "Discrete Math", revisionData, 2, tile, exploreButton);

  fireEvent.click(rightButton);
  checkTilePage("MATH1081", "Discrete Math", revisionData, 3, tile, exploreButton);

  fireEvent.click(leftButton);
  checkTilePage("MATH1081", "Discrete Math", revisionData, 2, tile, exploreButton);

  fireEvent.click(leftButton);
  checkTilePage("MATH1081", "Discrete Math", revisionData, 1, tile, exploreButton);

  fireEvent.click(leftButton);
  checkTilePage("MATH1081", "Discrete Math", revisionData, 0, tile, screen.getByText("Explore"));
});
