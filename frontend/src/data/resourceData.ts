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
    backgroundImage: "/images/resources/examBankBackground.png",
    iconPath: "/images/resources/examBankIcon.png"
  },
  {
    title: "Revision Lectures",
    resourceLink: "/resources/revision",
    backgroundImage: "/images/resources/revisionBackground.png",
    iconPath: "/images/resources/revisionIcon.png"
  },
  {
    title: "LaTeX Guide",
    resourceLink: "empty",
    backgroundImage: "/images/resources/latexBackground.png",
    iconPath: "/images/resources/latexIcon.png"
  },
  {
    title: "MATLAB Guide",
    resourceLink: "empty",
    backgroundImage: "/images/resources/matlabBackground.png",
    iconPath: "/images/resources/matlabIcon.png"
  },
  {
    title: "Careers Advice",
    resourceLink: "empty",
    backgroundImage: "/images/resources/careersBackground.png",
    iconPath: "/images/resources/careersIcon.png"
  },
  {
    title: "First Year Guide",
    resourceLink: "empty",
    backgroundImage: "/images/resources/firstYearBackground.png",
    iconPath: "/images/resources/firstYearIcon.png"
  },
  {
    title: "HSC Tips and Tricks",
    resourceLink: "empty",
    backgroundImage: "/images/resources/hscBackground.png",
    iconPath: "/images/resources/hscIcon.png"
  }
];

export default resourceData;
