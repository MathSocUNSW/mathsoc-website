interface director {
  name: string;
  imagePath: string | null;
}

export interface portfolio {
  role:
    | "Education"
    | "Events (Corporate)"
    | "Events (Social)"
    | "Human Resources"
    | "IT"
    | "Marketing"
    | "Sponsorships";
  directors: director[];
  subcom: string[];
}

const directorsData: portfolio[] = [
  {
    role: "Education",
    directors: [
      { name: "John Kameas", imagePath: null },
      { name: "Raymond Li", imagePath: "/images/team/RaymondLi.jpg" },
      {
        name: "Gorden Zhuang",
        imagePath: "/images/team/GordenZhuang.jpg"
      }
    ],
    subcom: [
      "Bruce Chen",
      "Felix Cao",
      "Isaiah Iliffe",
      "Jay Liang",
      "Joanna Lin",
      "Jordy Grant",
      "Lisa Huang",
      "Steve Jang",
      "Wendy Ji",
      "Yvonne Huang"
    ]
  },
  {
    role: "Events (Corporate)",
    directors: [
      {
        name: "Ting Li",
        imagePath: "/images/team/TingLi.jpg"
      },
      {
        name: "Andrew William",
        imagePath: null
      }
    ],
    subcom: [
      "Alice Zhang",
      "Danni Chen",
      "Harry Zhang",
      "Kush Singhy",
      "Princy Thakkar",
      "Teya Murray"
    ]
  },
  {
    role: "Events (Social)",
    directors: [
      { name: "Vedant Rampal", imagePath: "/images/team/VedantRampal.jpg" },
      {
        name: "Daniel Kim",
        imagePath: "/images/team/DanielKim.jpg"
      }
    ],
    subcom: [
      "Eva Lin",
      "Mehak Arya",
      "Omkar Thite",
      "Ricky Zheng",
      "Rijul Arjun Malik",
      "Vincent Liang"
    ]
  },
  {
    role: "Human Resources",
    directors: [
      {
        name: "Katherine Bai",
        imagePath: "/images/team/KatherineBai.jpg"
      },
      {
        name: "Christopher Wu",
        imagePath: null
      }
    ],
    subcom: []
  },
  {
    role: "IT",
    directors: [{ name: "Andrew Xie", imagePath: null }],
    subcom: ["Alvin Cherk", "Rahul Ahluwalia", "Wellington Dulay"]
  },
  {
    role: "Marketing",
    directors: [
      {
        name: "Celeste Thomson",
        imagePath: null
      },
      { name: "Jessica Zheng", imagePath: null }
    ],
    subcom: ["Brandon Liu", "Catherine Lye", "Erin Shee", "Lachlan Georgiadis", "Nat Brown"]
  },
  {
    role: "Sponsorships",
    directors: [
      { name: "Abhi Khosla", imagePath: null },
      { name: "Jordan Shen", imagePath: "/images/team/JordanShen.jpg" }
    ],
    subcom: []
  }
];

export default directorsData;
