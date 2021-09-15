type routeString = `/${string}`;

export interface subPage {
  name: string;
  subRoute: routeString;
  routeOutside: boolean;
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
      { name: "Meet the team", subRoute: "/team", routeOutside: false },
      { name: "Former Team", subRoute: "/formerteam", routeOutside: false }
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
      { name: "First Year Exam Bank", subRoute: "/exam-bank", routeOutside: false },
      { name: "Revision Lectures", subRoute: "/revision", routeOutside: false },
      { name: "LaTeX Guide", subRoute: "/latex", routeOutside: false },
      { name: "MATLAB Guide", subRoute: "/matlab", routeOutside: false },
      { name: "Careers Advice", subRoute: "/careers", routeOutside: false },
      {
        name: "First Year Guide",
        subRoute: "/files/resources/misc/First_Year_Guide_2021.pdf",
        routeOutside: true
      },
      {
        name: "HSC Tips & Tricks",
        subRoute: "/files/resources/misc/HSC-Tips-and-Tricks-Booklet-2019.pdf",
        routeOutside: true
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
