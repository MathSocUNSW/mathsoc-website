import { director, MemberDetails } from "src/data/portfolioData";
import { sponsor } from "src/data/sponsorsData";

const alphabeticalSort = (a: MemberDetails | sponsor, b: MemberDetails | sponsor) =>
  a.name.localeCompare(b.name);

export default alphabeticalSort;
