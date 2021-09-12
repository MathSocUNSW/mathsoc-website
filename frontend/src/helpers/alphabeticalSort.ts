import { director } from "src/data/portfolioData";

const alphabeticalSort = (a: director, b: director) => a.name.localeCompare(b.name);
export default alphabeticalSort;
