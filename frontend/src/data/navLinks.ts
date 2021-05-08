interface navLink {
  name: string;
  route: string;
}

const navLinks: Array<navLink> = [
  {
    name: "About Us",
    route: "/about"
  },
  {
    name: "Events",
    route: "/events"
  },
  {
    name: "Resources",
    route: "/resources"
  },
  {
    name: "Sponsors",
    route: "/sponsors"
  },
  {
    name: "Contact Us",
    route: "/contact"
  }
];

export default navLinks;
