type routeString = `/${string}`;

export interface subPage {
  name: string;
  subRoute: routeString;
  externalRoute: boolean;
}

export interface navLink {
  name: string;
  route: routeString;
  dropdown: subPage[] | null;
  displayDropdownMobile: null | boolean;
}

const navLinks: navLink[] = [
  {
    name: "About Us",
    route: "/about",
    dropdown: [
      { name: "Meet the Team", subRoute: "/team", externalRoute: false },
      { name: "Former Teams", subRoute: "/formerteam", externalRoute: false }
    ],
    displayDropdownMobile: true
  },
  {
    name: "Events",
    route: "/events",
    dropdown: null,
    displayDropdownMobile: null
  },
  {
    name: "Resources",
    route: "/resources",
    dropdown: [
      { name: "First Year Exam Bank", subRoute: "/exam-bank", externalRoute: false },
      { name: "Revision Lectures", subRoute: "/revision", externalRoute: false },
      { name: "LaTeX Guide", subRoute: "/latex", externalRoute: false },
      { name: "MATLAB Guide", subRoute: "/matlab", externalRoute: false },
      { name: "Careers Advice", subRoute: "/careers", externalRoute: false },
      {
        name: "First Year Guide",
        subRoute: "/files/resources/misc/First_Year_Guide_2021.pdf",
        externalRoute: true
      },
      {
        name: "HSC Tips & Tricks",
        subRoute: "/files/resources/misc/HSC-Tips-and-Tricks-Booklet-2019.pdf",
        externalRoute: true
      }
    ],
    displayDropdownMobile: false
  },
  {
    name: "Sponsors",
    route: "/sponsors",
    dropdown: null,
    displayDropdownMobile: null
  },
  {
    name: "Contact Us",
    route: "/contact",
    dropdown: null,
    displayDropdownMobile: null
  }
];

export default navLinks;
