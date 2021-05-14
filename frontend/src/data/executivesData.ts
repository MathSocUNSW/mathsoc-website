interface execPerson {
  name: string;
  role: "president" | "vice president" | "secretary" | "treasurer" | "arc delegate";
}

const executivesData: Array<execPerson> = [
  { name: "Grace Li", role: "president" },
  { name: "Philton Zhu", role: "vice president" },
  { name: "Justin Clarke", role: "secretary" },
  { name: "Merry Chu", role: "treasurer" },
  { name: "Gerald Huang", role: "arc delegate" }
];

export default executivesData;
