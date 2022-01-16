export interface resourceDetails {
  title: string;
  titlePosition: "left" | "right";
  resourceLink: string;
  backgroundImage: string;
  iconPath: string;
}

const RESOURCE_IMAGE_PATH = "/images/resources/";

export const examBankInfo: resourceDetails = {
  title: "First Year Exam Bank",
  titlePosition: "left",
  resourceLink: "/resources/exam-bank",
  backgroundImage: RESOURCE_IMAGE_PATH + "examBankBackground.png",
  iconPath: RESOURCE_IMAGE_PATH + "examBankIcon.png"
};

export const revisionInfo: resourceDetails = {
  title: "Revision Lectures",
  titlePosition: "right",
  resourceLink: "/resources/revision",
  backgroundImage: RESOURCE_IMAGE_PATH + "revisionBackground.png",
  iconPath: RESOURCE_IMAGE_PATH + "revisionIcon.png"
};

export const revisionSheetInfo: resourceDetails = {
  title: "Revision Sheets",
  titlePosition: "left",
  resourceLink: "/resources/sheets",
  backgroundImage: RESOURCE_IMAGE_PATH + "revisionSheetBackground.png",
  iconPath: RESOURCE_IMAGE_PATH + "revisionSheetIcon.png"
};

export const latexInfo: resourceDetails = {
  title: "LaTeX Guide",
  titlePosition: "right",
  resourceLink: "/resources/latex",
  backgroundImage: RESOURCE_IMAGE_PATH + "latexBackground.png",
  iconPath: RESOURCE_IMAGE_PATH + "latexIcon.png"
};

export const matlabInfo: resourceDetails = {
  title: "MATLAB Guide",
  titlePosition: "left",
  resourceLink: "/resources/matlab",
  backgroundImage: RESOURCE_IMAGE_PATH + "matlabBackground.png",
  iconPath: RESOURCE_IMAGE_PATH + "matlabIcon.png"
};

export const rInfo: resourceDetails = {
  title: "R Guide",
  titlePosition: "right",
  resourceLink: "/resources/r",
  backgroundImage: RESOURCE_IMAGE_PATH + "rBackground.png",
  iconPath: RESOURCE_IMAGE_PATH + "rIcon.png"
};

export const appInfo: resourceDetails = {
  title: "Applications",
  titlePosition: "left",
  resourceLink: "/applications",
  backgroundImage: RESOURCE_IMAGE_PATH + "appBackground.png",
  iconPath: RESOURCE_IMAGE_PATH + "appIcon.png"
};

export const careersInfo: resourceDetails = {
  title: "Careers Advice",
  titlePosition: "right",
  resourceLink: "/resources/careers",
  backgroundImage: RESOURCE_IMAGE_PATH + "careersBackground.png",
  iconPath: RESOURCE_IMAGE_PATH + "careersIcon.png"
};

export const firstYearInfo: resourceDetails = {
  title: "First Year Guide",
  titlePosition: "left",
  resourceLink: "/files/resources/misc/First_Year_Guide_2021.pdf",
  backgroundImage: RESOURCE_IMAGE_PATH + "firstYearBackground.png",
  iconPath: RESOURCE_IMAGE_PATH + "firstYearIcon.png"
};

export const hscInfo: resourceDetails = {
  title: "HSC Tips and Tricks",
  titlePosition: "right",
  resourceLink: "/files/resources/misc/HSC-Tips-and-Tricks-Booklet-2019.pdf",
  backgroundImage: RESOURCE_IMAGE_PATH + "hscBackground.png",
  iconPath: RESOURCE_IMAGE_PATH + "hscIcon.png"
};

const resourceInfo: resourceDetails[] = [
  examBankInfo,
  revisionInfo,
  revisionSheetInfo,
  latexInfo,
  matlabInfo,
  rInfo,
  appInfo,
  careersInfo,
  firstYearInfo,
  hscInfo
];

export default resourceInfo;
