interface executive {
  name: string;
  description?: string;
  role: "President" | "Vice President" | "Secretary" | "Treasurer" | "Arc Delegate";
}

const executivesData: executive[] = [
  { name: "Grace Li", role: "President" },
  { name: "Philton Zhu", role: "Vice President" },
  { name: "Justin Clarke", role: "Secretary" },
  { name: "Merry Chu", role: "Treasurer" },
  { name: "Gerald Huang", role: "Arc Delegate" }
];

export default executivesData;
