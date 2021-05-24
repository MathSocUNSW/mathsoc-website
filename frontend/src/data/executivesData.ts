interface executive {
  name: string;
  description: string | null;
  role: "President" | "Vice President" | "Secretary" | "Treasurer" | "Arc Delegate";
  imagePath: string | null;
}

const executivesData: executive[] = [
  { name: "Grace Li", role: "President", description: null, imagePath: null },
  { name: "Philton Zhu", role: "Vice President", description: null, imagePath: null },
  { name: "Justin Clarke", role: "Secretary", description: null, imagePath: null },
  {
    name: "Merry Chu",
    role: "Treasurer",
    description:
      "3rd year Adv Maths/Commerce student, minoring in obscure meme knowledge. Call duck appreciation, stand-up comedy and brunch dates make up 90% of my personality <3",
    imagePath: "/images/team/MerryChu.jpg"
  },
  {
    name: "Gerald Huang",
    role: "Arc Delegate",
    description:
      "4th year Advanced Science (Pure Maths) / Computer Science (Artificial Intelligence), trying to survive through this period of digital university and digital stress.",
    imagePath: null
  }
];

export default executivesData;
