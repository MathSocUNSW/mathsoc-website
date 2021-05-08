type directorPerson = {
  name: string;
};

type role = {
  role:
    | "education"
    | "corporate events"
    | "social events"
    | "human resources"
    | "IT"
    | "marketing"
    | "sponsorships";
  directors: Array<directorPerson>;
};

const directorsData: Array<role> = [
  {
    role: "education",
    directors: [{ name: "John Kameas" }, { name: "Raymond Li" }, { name: "Gorden Zhuang" }]
  },
  { role: "corporate events", directors: [{ name: "Ting Li" }, { name: "Andrew William" }] },
  { role: "social events", directors: [{ name: "Vedant Rampal" }, { name: "Daniel Kim" }] },
  { role: "human resources", directors: [{ name: "Katherine Bai" }, { name: "Christopher Wu" }] },
  { role: "IT", directors: [{ name: "Andrew Xie" }] },
  {
    role: "marketing",
    directors: [
      { name: "Gowtham Ravikumar" },
      { name: "Celeste Thomson" },
      { name: "Jessica Zheng" },
      { name: "Jordan Shen" }
    ]
  },
  { role: "sponsorships", directors: [{ name: "Abhi Khosla" }] }
];

export default directorsData;
