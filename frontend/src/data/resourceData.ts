export interface resourceDetails {
  title: string;
  resourceLink: string;
  backgroundImage: string;
  iconPath: string;
}

/**
 * Takes fileName and returns full path
 * @param fileName
 * @returns full path
 */
const generateImagePath = (fileName: string): string => {
  const PATH = "/images/resources";
  return `${PATH}/${fileName}`;
};

const resourceData: resourceDetails[] = [
  {
    title: "First Year Exam Bank",
    resourceLink: "/resources/exam-bank",
    backgroundImage: generateImagePath("examBankBackground.png"),
    iconPath: generateImagePath("examBankIcon.png")
  },
  {
    title: "Revision Lectures",
    resourceLink: "/resources/revision",
    backgroundImage: generateImagePath("revisionBackground.png"),
    iconPath: generateImagePath("revisionIcon.png")
  },
  {
    title: "LaTeX Guide",
    resourceLink: "/resources/latex",
    backgroundImage: generateImagePath("latexBackground.png"),
    iconPath: generateImagePath("latexIcon.png")
  },
  {
    title: "MATLAB Guide",
    resourceLink: "/resources/matlab",
    backgroundImage: generateImagePath("matlabBackground.png"),
    iconPath: generateImagePath("matlabIcon.png")
  },
  {
    title: "Careers Advice",
    resourceLink: "/resources/careers",
    backgroundImage: generateImagePath("careersBackground.png"),
    iconPath: generateImagePath("careersIcon.png")
  },
  {
    title: "First Year Guide",
    resourceLink: "empty",
    backgroundImage: generateImagePath("firstYearBackground.png"),
    iconPath: generateImagePath("firstYearIcon.png")
  },
  {
    title: "HSC Tips and Tricks",
    resourceLink: "/resources/hsc",
    backgroundImage: generateImagePath("hscBackground.png"),
    iconPath: generateImagePath("hscIcon.png")
  }
];

export default resourceData;
