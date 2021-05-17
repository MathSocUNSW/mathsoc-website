interface director {
  name: string;
  description?: string;
  imagePath?: string;
}

interface portfolio {
  role:
    | "Education"
    | "Corporate Events"
    | "Social Events"
    | "Human Resources"
    | "IT"
    | "Marketing"
    | "Sponsorships";
  directors: director[];
}

const directorsData: portfolio[] = [
  {
    role: "Education",
    directors: [{ name: "John Kameas" }, { name: "Raymond Li" }, { name: "Gorden Zhuang" }]
  },
  { role: "Corporate Events", directors: [{ name: "Ting Li" }, { name: "Andrew William" }] },
  { role: "Social Events", directors: [{ name: "Vedant Rampal" }, { name: "Daniel Kim" }] },
  { role: "Human Resources", directors: [{ name: "Katherine Bai" }, { name: "Christopher Wu" }] },
  { role: "IT", directors: [{ name: "Andrew Xie" }] },
  {
    role: "Marketing",
    directors: [
      { name: "Gowtham Ravikumar" },
      { name: "Celeste Thomson" },
      { name: "Jessica Zheng" }
    ]
  },
  { role: "Sponsorships", directors: [{ name: "Abhi Khosla" }, { name: "Jordan Shen" }] }
];

export default directorsData;
// TODO: alphabetical order under each role
