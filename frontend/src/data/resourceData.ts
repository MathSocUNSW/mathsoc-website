/*
- ICON PATH DOESN'T EXIST YET
- Is there a way to do internal links, or do I chuck the full url in
- I've just kept another version in commenting so I don't have to write it out again if I need it...
- 37af93faj
*/

export interface resourceDetails {
  title: string;
  resourceLink: string;
  backgroundImage: string;
  iconPath: string;
}

const resourceData: resourceDetails[] = [
  {
    title: "First Year Exam Bank",
    resourceLink: "/resources/exam",
    backgroundImage: "/images/firstYearExamBank.jpg",
    iconPath: "/images/firstYearExamBank.svg"
  },
  {
    title: "Revision Lectures",
    resourceLink: "/resources/revision",
    backgroundImage: "/images/revisionLecturesIcon.jpg",
    iconPath: "/images/revisionLecturesIcon.svg"
  },
  {
    title: "LaTex Guide",
    resourceLink: "37af93faj",
    backgroundImage: "/images/latexGuide.jpg",
    iconPath: "/images/latexGuide.svg"
  },
  {
    title: "MATLAB Guide",
    resourceLink: "37af93faj",
    backgroundImage: "/images/matlabGuideIcon.jpg",
    iconPath: "/images/matlabGuideIcon.svg"
  },
  {
    title: "Careers Advice",
    resourceLink: "37af93faj",
    backgroundImage: "/images/careersAdviceIcon.jpg",
    iconPath: "/images/careersAdviceIcon.svg"
  },
  {
    title: "First Year Guide",
    resourceLink: "37af93faj",
    backgroundImage: "/images/firstYearGuideIcon.jpg",
    iconPath: "/images/firstYearGuideIcon.svg"
  },
  {
    title: "HSC Tips and Tricks",
    resourceLink: "37af93faj",
    backgroundImage: "/images/hscTipsAndTricksIcon.jpg",
    iconPath: "/images/hscTipsAndTricksIcon.svg"
  }
];

export default resourceData;
