export interface director {
  name: string;
  imagePath: string;
  linkedin?: string;
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
      {
        name: "John Kameas",
        imagePath: "/images/team/JohnKameas.jpg",
        linkedin: "https://www.linkedin.com/in/john-kameas-2a6692179/"
      },
      {
        name: "Raymond Li",
        imagePath: "/images/team/RaymondLi.jpg",
        linkedin: "https://www.linkedin.com/in/raymond-li-23a576209/"
      },
      {
        name: "Gorden Zhuang",
        imagePath: "/images/team/GordenZhuang.jpg",
        linkedin: "https://www.linkedin.com/in/gorden-z-5882661a3/"
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
        imagePath: "/images/team/TingLi.jpg",
        linkedin: "https://www.linkedin.com/in/tiantingli/"
      },
      {
        name: "Andrew William",
        imagePath: "/images/team/AndrewWilliam.jpeg",
        linkedin: "https://www.linkedin.com/in/andrew-william-1507/"
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
      {
        name: "Vedant Rampal",
        imagePath: "/images/team/VedantRampal.jpeg",
        linkedin: "https://www.linkedin.com/in/vedant-rampal/"
      },
      {
        name: "Daniel Kim",
        imagePath: "/images/team/DanielKim.jpg",
        linkedin: "https://www.linkedin.com/in/danielkim21/"
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
        imagePath: "/images/team/KatherineBai.jpg",
        linkedin: "https://www.linkedin.com/in/katherine-bai-62b3281a7/"
      },
      {
        name: "Christopher Wu",
        imagePath: "/images/team/ChrisWu.png",
        linkedin: "https://www.linkedin.com/in/christopher-wu-b296a418b/"
      }
    ],
    subcom: []
  },
  {
    role: "IT",
    directors: [
      {
        name: "Andrew Xie",
        imagePath: "/images/team/AndrewXie.jpeg",
        linkedin: "https://www.linkedin.com/in/andrewxie1/"
      }
    ],
    subcom: ["Alvin Cherk", "Rahul Ahluwalia", "Wellington Dulay"]
  },
  {
    role: "Marketing",
    directors: [
      {
        name: "Celeste Thomson",
        imagePath: "",
        linkedin: "https://www.linkedin.com/in/celeste-thomson-968543160/"
      },
      {
        name: "Jessica Zheng",
        imagePath: "/images/team/JessicaZheng.jpeg",
        linkedin: "https://www.linkedin.com/in/jess-zheng/"
      }
    ],
    subcom: ["Brandon Liu", "Catherine Lye", "Erin Shee", "Lachlan Georgiadis", "Nat Brown"]
  },
  {
    role: "Sponsorships",
    directors: [
      {
        name: "Abhi Khosla",
        imagePath: "/images/team/AbhiKhosla.jpeg",
        linkedin: "https://www.linkedin.com/in/abhikhosla/"
      },
      {
        name: "Jordan Shen",
        imagePath: "/images/team/JordanShen.jpg",
        linkedin: "https://www.linkedin.com/in/jordan-shen/"
      }
    ],
    subcom: []
  }
];

export default directorsData;
