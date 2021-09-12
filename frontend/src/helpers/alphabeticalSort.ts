import { director } from "src/data/portfolioData";
import { sponsor } from "src/data/sponsorsData";

const alphabeticalSort = (a: director | sponsor, b: director | sponsor) =>
  a.name.localeCompare(b.name);

export default alphabeticalSort;
