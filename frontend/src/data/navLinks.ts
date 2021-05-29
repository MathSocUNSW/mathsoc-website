export interface subPage {
  name: string;
  route: string;
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
      { name: "Team", route: "/about/team" },
      { name: "Past Team", route: "/about/past" }
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
