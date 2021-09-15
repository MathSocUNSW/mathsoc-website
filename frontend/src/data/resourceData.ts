export interface resourceDetails {
  title: string;
  resourceLink: string;
  backgroundImage: string;
  iconPath: string;
}

const RESOURCE_IMAGE_PATH = "/images/resources/";

export const examBankInfo: resourceDetails = {
  title: "First Year Exam Bank",
  resourceLink: "/resources/exam-bank",
  backgroundImage: RESOURCE_IMAGE_PATH + "examBankBackground.png",
  iconPath: RESOURCE_IMAGE_PATH + "examBankIcon.png"
};

export const revisionInfo: resourceDetails = {
  title: "Revision Lectures",
  resourceLink: "/resources/revision",
  backgroundImage: RESOURCE_IMAGE_PATH + "revisionBackground.png",
  iconPath: RESOURCE_IMAGE_PATH + "revisionIcon.png"
};

export const latexInfo: resourceDetails = {
  title: "LaTeX Guide",
  resourceLink: "/resources/latex",
  backgroundImage: RESOURCE_IMAGE_PATH + "latexBackground.png",
  iconPath: RESOURCE_IMAGE_PATH + "latexIcon.png"
};

export const matlabInfo: resourceDetails = {
  title: "MATLAB Guide",
  resourceLink: "/resources/matlab",
  backgroundImage: RESOURCE_IMAGE_PATH + "matlabBackground.png",
  iconPath: RESOURCE_IMAGE_PATH + "matlabIcon.png"
};

export const careersInfo: resourceDetails = {
  title: "Careers Advice",
  resourceLink: "/resources/careers",
  backgroundImage: RESOURCE_IMAGE_PATH + "careersBackground.png",
  iconPath: RESOURCE_IMAGE_PATH + "careersIcon.png"
};

export const firstYearInfo: resourceDetails = {
  title: "First Year Guide",
  resourceLink: "/files/resources/misc/First_Year_Guide_2021.pdf",
  backgroundImage: RESOURCE_IMAGE_PATH + "firstYearBackground.png",
  iconPath: RESOURCE_IMAGE_PATH + "firstYearIcon.png"
};

export const hscInfo: resourceDetails = {
  title: "HSC Tips and Tricks",
  resourceLink: "/files/resources/misc/HSC-Tips-and-Tricks-Booklet-2019.pdf",
  backgroundImage: RESOURCE_IMAGE_PATH + "hscBackground.png",
  iconPath: RESOURCE_IMAGE_PATH + "hscIcon.png"
};

const resourceInfo: resourceDetails[] = [
  examBankInfo,
  revisionInfo,
  latexInfo,
  matlabInfo,
  careersInfo,
  firstYearInfo,
  hscInfo
];

export default resourceInfo;
