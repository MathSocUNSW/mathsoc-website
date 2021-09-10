type routeString = `/${string}`;

export interface subPage {
  name: string;
  subRoute: routeString;
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
      { name: "Meet the team", subRoute: "/team" },
      { name: "Former Team", subRoute: "/formerteam" }
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
      { name: "First Year Exam Bank", subRoute: "/exam-bank" },
      { name: "Revision Lectures", subRoute: "/revision" },
      { name: "LaTeX Guide", subRoute: "/latex" },
      { name: "MATLAB Guide", subRoute: "/matlab" },
      { name: "Careers Advice", subRoute: "/careers" },
      { name: "First Year Guide", subRoute: "/404" }, // TODO
      { name: "HSC Tips & Tricks", subRoute: "/hsc" }
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
