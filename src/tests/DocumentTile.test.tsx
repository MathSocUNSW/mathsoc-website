import { render, screen } from "@testing-library/react";
import DocumentTile from "../components/DocumentTile";

test("contains the right text", () => {
  render(<DocumentTile courseCode="MATH1081" courseTitle="Discrete Mathematics" path="" />);
  let tile = screen.getByTestId("document-tile");
  expect(tile).toHaveTextContent("MATH1081");
  expect(tile).toHaveTextContent("Discrete Mathematics");
});
