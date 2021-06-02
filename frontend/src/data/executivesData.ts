interface executive {
  name: string;
  description: string | null;
  role: "President" | "Vice President" | "Secretary" | "Treasurer" | "Arc Delegate";
  imagePath: string | null;
}

const executivesData: executive[] = [
  { name: "Grace Li", role: "President", description: null, imagePath: "/images/team/GraceLi.jpg" },
  {
    name: "Philton Zhu",
    role: "Vice President",
    description: null,
    imagePath: "/images/team/PhiltonZhu.png"
  },
  {
    name: "Justin Clarke",
    role: "Secretary",
    description:
      "3rd year Quantitative Data Science and Decisions student. My name is Justin for a reason in Valorant (MeMe10rd #OCE) and I also play reps volleyball for UNSW in division 1 :) ",
    imagePath: "/images/team/JustinClarke.jpg"
  },
  {
    name: "Merry Chu",
    role: "Treasurer",
    description:
      "3rd year Adv Maths/Commerce student. Call ducks, stand-up comedy and feeling personally victimised by Buzzfeed quiz results make up 90% of my personality.",
    imagePath: "/images/team/MerryChu.jpg"
  },
  {
    name: "Gerald Huang",
    role: "Arc Delegate",
    description:
      "4th year Advanced Science (Pure Maths) / Computer Science (Artificial Intelligence), trying to survive through this period of digital university and digital stress.",
    imagePath: "/images/team/GeraldHuang.jpg"
  }
];

export default executivesData;
