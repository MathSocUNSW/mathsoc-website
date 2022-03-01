import { Director } from "src/data/portfolioData";
import { sponsor } from "src/data/sponsorsData";

const alphabeticalSort = (a: Director | sponsor, b: Director | sponsor) =>
  a.name.localeCompare(b.name);

export default alphabeticalSort;
