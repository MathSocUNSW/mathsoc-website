interface executive {
  name: string;
  description: string;
  role: "President" | "Vice President" | "Secretary" | "Treasurer" | "Arc Delegate";
  imagePath: string;
}

const executivesData: executive[] = [
  {
    name: "Grace Li",
    role: "President",
    description:
      "4th Year Science and Business student. Part-time pyromaniac but only as a hobby. PM me for details on joining my pyramid scheme personal business venture.",
    imagePath: "/images/team/GraceLi.jpg"
  },
  {
    name: "Philton Zhu",
    role: "Vice President",
    description:
      "4th year Advanced Math / Compsci student. Only made it this far on my unhealthy addiction to caffeine and fried chicken. Will sacrifice lectures for a Zinger Box.",
    imagePath: "/images/team/PhiltonZhu.jpg"
  },
  {
    name: "Justin Clarke",
    role: "Secretary",
    description:
      "3rd year Quantitative Data Science and Decisions student. My name is JustIn for a reason in Valorant (MeMe10rd #OCE), and I also play Div 1 reps volleyball but that's kinda a thing of the past ;-;",
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
