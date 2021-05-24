interface director {
  name: string;
  description: string | null;
  imagePath?: string | null;
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
    directors: [
      { name: "John Kameas", description: null, imagePath: null },
      { name: "Raymond Li", description: null, imagePath: null },
      {
        name: "Gorden Zhuang",
        description:
          "3rd year actuarial studies and applied maths student. Hibernates perennially while secretly hoping to get rich from a questionable selection of stonks."
      }
    ]
  },
  {
    role: "Corporate Events",
    directors: [
      { name: "Ting Li", description: null, imagePath: null },
      { name: "Andrew William", description: null, imagePath: null }
    ]
  },
  {
    role: "Social Events",
    directors: [
      { name: "Vedant Rampal", description: null, imagePath: null },
      {
        name: "Daniel Kim",
        description: `2nd Year Computer Science/Statistics Student.
          My vision for MathSoc: Make the supreme meme dream team`,
        imagePath: "/images/team/DanielKim.jpg"
      }
    ]
  },
  {
    role: "Human Resources",
    directors: [
      { name: "Katherine Bai", description: null, imagePath: null },
      { name: "Christopher Wu", description: null, imagePath: null }
    ]
  },
  { role: "IT", directors: [{ name: "Andrew Xie", description: null, imagePath: null }] },
  {
    role: "Marketing",
    directors: [
      { name: "Gowtham Ravikumar", description: null, imagePath: null },
      { name: "Celeste Thomson", description: null, imagePath: null },
      { name: "Jessica Zheng", description: null, imagePath: null }
    ]
  },
  {
    role: "Sponsorships",
    directors: [
      { name: "Abhi Khosla", description: null, imagePath: null },
      { name: "Jordan Shen", description: null, imagePath: null }
    ]
  }
];

export default directorsData;
// TODO: alphabetical order under each role
