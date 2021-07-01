interface director {
  name: string;
  description: string | null;
  imagePath: string | null;
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
      { name: "Raymond Li", description: null, imagePath: "/images/team/RaymondLi.jpg" },
      {
        name: "Gorden Zhuang",
        description:
          "3rd year actuarial studies and applied maths student. Hibernates perennially while secretly hoping to get rich from a questionable selection of stonks.",
        imagePath: "/images/team/GordenZhuang.jpg"
      }
    ]
  },
  {
    role: "Corporate Events",
    directors: [
      {
        name: "Ting Li",
        description: `4th Year Actl/Maths student. 
      Will only study at Science and Engineering building on campus.`,
        imagePath: "/images/team/TingLi.jpg"
      },
      {
        name: "Andrew William",
        description:
          "2nd Year Quantitative Data Science student. Dog, meme and anime lover. Contact me for details on how to QuAnTiTAtivEly lose money in Crypto :>",
        imagePath: null
      }
    ]
  },
  {
    role: "Social Events",
    directors: [
      { name: "Vedant Rampal", description: null, imagePath: "/images/team/VedantRampal.jpg" },
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
      {
        name: "Katherine Bai",
        description:
          "2nd year Actuarial Studies/Advanced Maths student. Loves the aquarium!! And sushi hehe...",
        imagePath: "/images/team/KatherineBai.jpg"
      },
      {
        name: "Christopher Wu",
        description:
          "3rd Year Commerce and Computer Science student. Enjoys sleeping and KFC religiously.",
        imagePath: null
      }
    ]
  },
  { role: "IT", directors: [{ name: "Andrew Xie", description: null, imagePath: null }] },
  {
    role: "Marketing",
    directors: [
      {
        name: "Gowtham Ravikumar",
        description:
          "2nd Year Computer Science student. Enjoys reading and photography but can usually be found procrastinating. Do not let him out of sight when drunk.",
        imagePath: "/images/team/GowthamRavikumar.jpeg"
      },
      {
        name: "Celeste Thomson",
        description:
          "4th Year Chemical and Biomedical Engineering student. Has bad taste in video games. Likes climbing tall things and kissing cats on the head.",
        imagePath: null
      },
      { name: "Jessica Zheng", description: null, imagePath: null }
    ]
  },
  {
    role: "Sponsorships",
    directors: [
      { name: "Abhi Khosla", description: null, imagePath: null },
      { name: "Jordan Shen", description: null, imagePath: "/images/team/JordanShen.jpg" }
    ]
  }
];

export default directorsData;
// TODO: alphabetical order under each role
