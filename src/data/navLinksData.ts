export interface subPage {
  name: string;
  subRoute: string;
  useRelativeRoute: boolean;
}

export interface navLink {
  name: string;
  route: string;
  dropdown: subPage[];
  mobileOnly: boolean;
}

const navLinks: navLink[] = [
  {
    name: "Home",
    route: "/",
    dropdown: [],
    mobileOnly: true
  },
  {
    name: "About Us",
    route: "/about",
    dropdown: [
      { name: "About MathSoc", subRoute: "/", useRelativeRoute: true },
      { name: "Meet the Team", subRoute: "/team", useRelativeRoute: true },
      { name: "Former Teams", subRoute: "/formerteam", useRelativeRoute: true },
      { name: "Join Us", subRoute: "/join", useRelativeRoute: true },
      {
        name: "Constitution",
        subRoute: "/files/general/Constitution-and-GRPP-2021.pdf",
        useRelativeRoute: false
      }
    ],
    mobileOnly: false
  },
  {
    name: "Events",
    route: "/events",
    dropdown: [],
    mobileOnly: false
  },
  // TODO: use resourceData
  {
    name: "Resources",
    route: "/resources",
    dropdown: [
      { name: "Our Resources", subRoute: "/", useRelativeRoute: true },
      { name: "First Year Exam Bank", subRoute: "/exam-bank", useRelativeRoute: true },
      { name: "Revision Lectures", subRoute: "/revision", useRelativeRoute: true },
      { name: "Revision Sheets", subRoute: "/sheets", useRelativeRoute: true },
      { name: "LaTeX Guide", subRoute: "/latex", useRelativeRoute: true },
      { name: "MATLAB Guide", subRoute: "/matlab", useRelativeRoute: true },
      { name: "R Guide", subRoute: "/r", useRelativeRoute: true },
      { name: "Applications", subRoute: "/applications", useRelativeRoute: false },
      { name: "Careers Advice", subRoute: "/careers", useRelativeRoute: true },
      {
        name: "First Year Guide",
        subRoute: "/files/resources/misc/First_Year_Guide_2023.pdf",
        useRelativeRoute: false
      },
      {
        name: "HSC Tips & Tricks",
        subRoute: "/files/resources/misc/HSC-Tips-and-Tricks-Booklet-2019.pdf",
        useRelativeRoute: false
      }
    ],
    mobileOnly: false
  },
  {
    name: "Competitions",
    route: "/competitions",
    dropdown: [],
    mobileOnly: false
  },
  {
    name: "Sponsors",
    route: "/sponsors",
    dropdown: [],
    mobileOnly: false
  },
  {
    name: "Contact Us",
    route: "/contact",
    dropdown: [],
    mobileOnly: false
  }
];

export default navLinks;
