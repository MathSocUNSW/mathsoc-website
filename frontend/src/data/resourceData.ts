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
    backgroundImage: "/images/resources/examBankBackground.jpg",
    iconPath: "/images/resources/examBankIcon.png"
  },
  {
    title: "Revision Lectures",
    resourceLink: "/resources/revision",
    backgroundImage: "/images/resources/revisionBackground.jpg",
    iconPath: "/images/resources/revisionIcon.png"
  },
  {
    title: "LaTeX Guide",
    resourceLink: "37af93faj",
    backgroundImage: "/images/resources/latexBackground.jpg",
    iconPath: "/images/resources/latexIcon.png"
  },
  {
    title: "MATLAB Guide",
    resourceLink: "37af93faj",
    backgroundImage: "/images/resources/matlabBackground.jpg",
    iconPath: "/images/resources/matlabIcon.png"
  },
  {
    title: "Careers Advice",
    resourceLink: "37af93faj",
    backgroundImage: "/images/resources/careersBackground.jpg",
    iconPath: "/images/resources/careersIcon.png"
  },
  {
    title: "First Year Guide",
    resourceLink: "37af93faj",
    backgroundImage: "/images/resources/firstYearBackground.jpg",
    iconPath: "/images/resources/firstYearIcon.png"
  },
  {
    title: "HSC Tips and Tricks",
    resourceLink: "37af93faj",
    backgroundImage: "/images/resources/hscBackground.jpg",
    iconPath: "/images/resources/hscIcon.png"
  }
];

export default resourceData;
