export interface subPage {
  name: string;
  subRoute: string;
}

export interface navLink {
  name: string;
  route: string;
  dropdown: subPage[] | null;
}

const navLinks: navLink[] = [
  {
    name: "About Us",
    route: "/about",
    dropdown: [
      { name: "Meet the team", subRoute: "/team" },
      { name: "Former Team", subRoute: "/formerteam" }
    ]
  },
  {
    name: "Events",
    route: "/events",
    dropdown: null
  },
  {
    name: "Resources",
    route: "/resources",
    dropdown: null
  },
  {
    name: "Sponsors",
    route: "/sponsors",
    dropdown: null
  },
  {
    name: "Contact Us",
    route: "/contact",
    dropdown: null
  }
];

export default navLinks;
