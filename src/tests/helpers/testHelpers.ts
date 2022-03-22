import { groups } from "../../data/revisionData";

/**
 * Verifies that a tile displays the correct information
 */
export const checkTilePage = (
  courseCode: string,
  courseTitle: string,
  revisionData: groups[],
  page: number,
  tile: HTMLElement,
  exploreButton: HTMLButtonElement
) => {
  expect(tile).toHaveTextContent(courseCode);
  if (page === 0) {
    expect(tile).toHaveTextContent(courseTitle);
    expect(tile).toContainElement(exploreButton);
    for (let item of revisionData) {
      expect(tile).not.toHaveTextContent(item.groupHeader);
      for (let link of item.groupLinks) {
        expect(tile).not.toHaveTextContent(link.name);
      }
    }
  } else {
    expect(tile).not.toHaveTextContent(courseTitle);
    expect(tile).not.toContainElement(exploreButton);
    for (let i = 0; i < revisionData.length; i++) {
      if (i == page - 1) {
        expect(tile).toHaveTextContent(revisionData[i].groupHeader);
        for (let link of revisionData[i].groupLinks) {
          expect(tile).toHaveTextContent(link.name);
        }
      } else {
        expect(tile).not.toHaveTextContent(revisionData[i].groupHeader);
        for (let link of revisionData[i].groupLinks) {
          expect(tile).not.toHaveTextContent(link.name);
        }
      }
    }
  }
};
