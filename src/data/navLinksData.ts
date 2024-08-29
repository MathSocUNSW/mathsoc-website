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
        subRoute: "/files/general/Constitution-and-GRPP-2023.pdf",
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

  // You can actually just add an entire link and it will work (thanks alvin)
  {
    name: "Resources",
    route: "https://drive.google.com/drive/folders/1v7WrVhAzZxtIhkEXeDMUiaoKF8jHkV96?usp=sharing",
    dropdown: [],
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
