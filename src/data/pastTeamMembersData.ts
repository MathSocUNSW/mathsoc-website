export interface execPerson {
  name: string;
  role:
    | "President"
    | "Vice President"
    | "Secretary"
    | "Treasurer"
    | "Arc Delegate"
    | "External VP"
    | "Internal VP";
}

export interface directorRole {
  role:
    | "Education"
    | "Corporate Events"
    | "Social Events"
    | "Human Resources"
    | "IT"
    | "Marketing"
    | "Sponsorships"
    | "Events"
    | "Women's"
    | "Outreach"
    | "Secretary & Public Relations"
    | "Publications";
  directors: string[];
}

export interface subcommitteeData {
  role:
    | "Education"
    | "Corporate Events"
    | "Social Events"
    | "Human Resources"
    | "IT"
    | "Marketing"
    | "Sponsorships"
    | "Events"
    | "General";
  members: string[];
}

export interface yearTeamData {
  year: number;
  execList: execPerson[];
  directorList: directorRole[];
  subcommittee: subcommitteeData[];
}

const pastTeamData: yearTeamData[] = [
  {
    year: 2022,
    execList: [
      { name: "Merry Chu", role: "President" },
      { name: "Katherine Bai", role: "Vice President" },
      { name: "Daniel Kim", role: "Secretary" },
      { name: "Abhi Khosla", role: "Treasurer" },
      { name: "Brandon Liu", role: "Arc Delegate" }
    ],
    directorList: [
      { role: "Education", directors: ["Andrew William", "Bruce Chen", "Jay Liang"] },
      { role: "Social Events", directors: ["Kathy Nguyen"] },
      { role: "Corporate Events", directors: ["Teya Murray"] },
      { role: "IT", directors: ["Aaren Sriskandarajah", "Joanna Lin"] },
      { role: "Marketing", directors: ["Catherine Lye", "Felix Cao", "Han Zhang"] },
      { role: "Sponsorships", directors: ["Andrew Cheung"] },
      { role: "Human Resources", directors: ["Justin Dong", "Sharon Zhong"] }
    ],
    subcommittee: [
      {
        role: "Education",
        members: [
          "Fred Yan",
          "Gerald Huang",
          "James Davidson",
          "Jerry Kim",
          "Lachlan Tobin",
          "Michael Pogrebinsky",
          "Noah Rubin",
          "Ronald Chiang",
          "Steve Jang"
        ]
      },
      {
        role: "Corporate Events",
        members: ["Claudia Shen", "Gurnik Singh", "Jaime Cheung", "Manav Dodia"]
      },
      {
        role: "Sponsorships",
        members: ["Anthony Kim", "Charlie Huang", "Elissa Luong", "Will Zeng"]
      },
      {
        role: "Human Resources",
        members: [
          "Audrey Tanama",
          "Brittany Li",
          "Chris Wu",
          "Daniel Khuu",
          "Julian Zheng-Lin",
          "Steven Chye"
        ]
      },
      {
        role: "Social Events",
        members: [
          "Barclay Zhang",
          "Carina Shen",
          "Lok Yan Ng",
          "Nicole Jiang",
          "Teresa Lu",
          "Wa'ddah El-Ardenli"
        ]
      },
      {
        role: "Marketing",
        members: [
          "Angela Lei",
          "Brian Lei",
          "Erin Shee",
          "Henrik Osterberg",
          "Joshua Cohen",
          "Kelly Pan",
          "Neal O'Brien",
          "Neil Nag"
        ]
      },
      { role: "IT", members: ["Anderson Pech", "Danielle Koo", "Derek Xu"] }
    ]
  },
  {
    year: 2021,
    execList: [
      { name: "Grace Li", role: "President" },
      { name: "Philton Zhu", role: "Vice President" },
      { name: "Justin Clarke", role: "Secretary" },
      { name: "Merry Chu", role: "Treasurer" },
      { name: "Gerald Huang", role: "Arc Delegate" }
    ],
    directorList: [
      { role: "Education", directors: ["Gorden Zhuang", "John Kameas", "Raymond Li"] },
      { role: "Social Events", directors: ["Vedant Rampal", "Daniel Kim"] },
      { role: "Corporate Events", directors: ["Ting Li", "Andrew William"] },
      { role: "IT", directors: ["Andrew Xie"] },
      { role: "Marketing", directors: ["Celeste Thomson", "Jessica Zheng"] },
      { role: "Sponsorships", directors: ["Abhi Khosla", "Jordan Shen"] },
      { role: "Human Resources", directors: ["Katherine Bai", "Christopher Wu"] }
    ],
    subcommittee: [
      {
        role: "Education",
        members: [
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
        role: "Corporate Events",
        members: [
          "Alice Zhang",
          "Danni Chen",
          "Harry Zhang",
          "Kush Singhy",
          "Princy Thakkar",
          "Teya Murray"
        ]
      },
      {
        role: "Social Events",
        members: [
          "Eva Lin",
          "Mehak Arya",
          "Omkar Thite",
          "Ricky Zheng",
          "Rijul Arjun Malik",
          "Vincent Liang"
        ]
      },
      { role: "IT", members: ["Alvin Cherk", "Rahul Ahluwalia", "Wellington Dulay"] },
      {
        role: "Marketing",
        members: ["Brandon Liu", "Catherine Lye", "Erin Shee", "Lachlan Georgiadis", "Nat Brown"]
      }
    ]
  },
  {
    year: 2020,
    execList: [
      { name: "James Gao", role: "President" },
      { name: "Yuseph Ma", role: "Vice President" },
      { name: "Grace Li", role: "Secretary" },
      { name: "Rui Tong", role: "Treasurer" },
      { name: "Jason Zhao", role: "Arc Delegate" }
    ],
    directorList: [
      {
        role: "Education",
        directors: ["Gerald Huang", "Abdellah Islam", "Alex Zhu"]
      },
      { role: "Corporate Events", directors: ["Winston Sun", "Lauren Wu"] },
      { role: "Social Events", directors: ["Wendy Zhang", "Philton Zhu"] },
      { role: "IT", directors: ["Ethan Brown"] },
      { role: "Marketing", directors: ["Isabella Falanga", "Celeste Thomson"] },
      { role: "Sponsorships", directors: ["Christopher Wu", "Nancy Yu"] }
    ],
    subcommittee: [
      {
        role: "Education",
        members: [
          "Kabir Agrawal",
          "Henry Lam",
          "Raymond Li",
          "Joanna Lin",
          "Shayekh Rouf",
          "Rishabh Singh",
          "Donald Tang",
          "Karen Zhang",
          "Gorden Zhuang"
        ]
      },
      {
        role: "Corporate Events",
        members: ["Catherine Kwon", "Ting Li", "Vedant Rampal", "Jordan Shen", "Vivian Wong"]
      },
      {
        role: "Social Events",
        members: ["Jason Cao", "Merry Chu", "Kathryn Dalton", "Nafis Dewan", "Angie Geng"]
      },
      { role: "Human Resources", members: ["Justin Clarke", "Lauren Huynh"] },
      {
        role: "Marketing",
        members: [
          "Sukhleen Khalsa",
          "Samraggi Pant",
          "Vedant Shah",
          "Erica Soenarjo",
          "Sue Vo",
          "Claire Xue"
        ]
      },
      {
        role: "IT",
        members: ["Nicholas Berridge-Argent", "Nina Tang", "Jeffrey Yang", "Zander Zhuang"]
      }
    ]
  },
  {
    year: 2019,
    execList: [
      { name: "Eugenia Cao", role: "President" },
      { name: "Andrew Antony", role: "Vice President" },
      { name: "Samir Mustavi", role: "Secretary" },
      { name: "David Wassef", role: "Treasurer" },
      { name: "Stephanie Tong", role: "Arc Delegate" }
    ],
    directorList: [
      { role: "Education", directors: ["Rui Tong", "James Gao"] },
      {
        role: "Events",
        directors: ["Arnav Roy", "Matthew Xu", "Derek Sun"]
      },
      { role: "IT", directors: ["Lucy Qiu"] },
      { role: "Marketing", directors: ["Grace Li", "Spencer Yang"] },
      { role: "Sponsorships", directors: ["Odelia Sze-To", "James Lu"] }
    ],
    subcommittee: [
      {
        role: "Education",
        members: [
          "Kabir Agrawal",
          "Ethan Brown",
          "Gerald Huang",
          "Abdellah Islam",
          "Laeeque Jamdar",
          "Yasin Khan",
          "Supriya Segal",
          "Jeffrey Yang"
        ]
      },
      {
        role: "Events",
        members: [
          "Dimas Sanjoyio",
          "Winston Sun",
          "Celeste Thomson",
          "Christopher Wu",
          "Flora Zhang",
          "Philton Zhu"
        ]
      },
      {
        role: "Marketing",
        members: [
          "Vincent Chen",
          "Isabella Falanga",
          "Ashleigh Feng",
          "Yuseph Ma",
          "John Wei",
          "Lauren Wu"
        ]
      }
    ]
  },
  {
    year: 2018,
    execList: [
      { name: "Shahbaz Bains", role: "President" },
      { name: "Justin Huang", role: "Vice President" },
      { name: "Andrew Antony", role: "Secretary" },
      { name: "Philippa Ma", role: "Treasurer" },
      { name: "Yifan Shen", role: "Arc Delegate" }
    ],
    directorList: [
      {
        role: "Education",
        directors: ["Alexander Pu Ling", "Kevin Ge"]
      },
      {
        role: "Events",
        directors: ["Samir Mustavi", "David Wassef", "Eugenia Cao"]
      },
      { role: "IT", directors: ["Gal Aharon"] },
      {
        role: "Marketing",
        directors: ["Andy Nguyen", "Elie Sikh", "Baktiar Niloy"]
      },
      {
        role: "Sponsorships",
        directors: ["Brendon Yang", "Stephanie Tong", "Amitoze Singh"]
      },
      { role: "Human Resources", directors: ["Henderson Koh"] }
    ],
    subcommittee: [
      {
        role: "Education",
        members: ["Steven Chung", "Hawk Ji", "Yuyu Ma", "Jim Ng", "Jessica Nguyen", "Melantha Wang"]
      },
      {
        role: "Events",
        members: [
          "Arnav Roy",
          "Derek Sun",
          "Odelia Sze-To",
          "Vivian Szeto",
          "Kristy Yee",
          "Ruby Yu"
        ]
      },
      {
        role: "Marketing",
        members: ["Grace Li", "Renée Lu", "Lachlan Sue", "Spencer Yang", "Raymond Zhang"]
      },
      { role: "IT", members: ["Sage Barreda", "Aaron Chin", "Nayeem Haque", "Kevin Lu"] }
    ]
  },
  {
    year: 2017,
    execList: [
      { name: "Robert Tan", role: "President" },
      { name: "Toby Walmsley", role: "Vice President" },
      { name: "Suman Prusty", role: "Secretary" },
      { name: "Connie Kuo", role: "Treasurer" },
      { name: "Sally Wang", role: "Arc Delegate" }
    ],
    directorList: [
      {
        role: "Education",
        directors: ["Dominic Palanca", "Aaron Hassan"]
      },
      {
        role: "Events",
        directors: ["Philippa Ma", "Henderson Koh"]
      },
      { role: "IT", directors: ["Amitoze Singh"] },
      { role: "Marketing", directors: ["Yifan Shen"] },
      { role: "Sponsorships", directors: ["Shahbaz Bains", "Vishaal Nathan"] },
      { role: "Women's", directors: ["Julia Renouf"] },
      { role: "Outreach", directors: ["Andrew Antony"] }
    ],
    subcommittee: [
      {
        role: "General",
        members: [
          "Brendon Yang",
          "Alex Zhu",
          "Chenxiao Qu",
          "James Gao",
          "Angela Li",
          "Sunchit Sethi",
          "Keshav Kotecha",
          "Samir Mustavi",
          "Elie Sikh",
          "Wijekoon Mudiyanselage Oshadhi Nirmanee Wijekoon",
          "Baktiar Niloy",
          "Justin Huang",
          "Allan Loi",
          "Gal Aharon",
          "Leon Xu",
          "Kevin Ge",
          "Daniel Tanios",
          "Kevin Xian",
          "Sida Wang",
          "Kevin Pham"
        ]
      }
    ]
  },
  {
    year: 2016,
    execList: [
      { name: "Treves Li", role: "President" },
      { name: "Miriam Greenbaum", role: "Vice President" },
      { name: "Toby Walmsley", role: "Secretary" },
      { name: "Robert Tan", role: "Treasurer" },
      { name: "Yongzhen Chen", role: "Arc Delegate" }
    ],
    directorList: [
      {
        role: "Education",
        directors: ["Henderson Koh", "Vishaal Nathan"]
      },
      {
        role: "Events",
        directors: ["Jamie Priest", "Sally Wang"]
      },
      { role: "IT", directors: ["Brendan Trinh"] },
      { role: "Marketing", directors: ["Mary Chen"] },
      { role: "Sponsorships", directors: ["Jack Gan", "Yang Hu"] },
      { role: "Women's", directors: ["Connie Kuo"] },
      { role: "Outreach", directors: ["Thomas Sritharan"] }
    ],
    subcommittee: [
      {
        role: "General",
        members: [
          "Ryan Mackay",
          "Raymond Ye",
          "Stephanie Chan",
          "Jess Dai",
          "Yifan Shen",
          "Manishka Parkesh",
          "Xinh Tran",
          "Sunchit Sethi",
          "Dominic Palanca",
          "Shilong Zhu",
          "Mary Chen",
          "Andrew Dai",
          "Aaron Hasssan",
          "Kevin Ge",
          "Jonathan Kim Sing",
          "Julia Renouf",
          "Matthew Yan",
          "Conrad Martin",
          "Shahbaz Bains",
          "Allan Loi",
          "Gaurav Sapre",
          "Rebecca Johnston"
        ]
      }
    ]
  },
  {
    year: 2015,
    execList: [
      { name: "Treves Li & Gary Liang", role: "President" },
      { name: "Timothy Nguyen & Daniel Le", role: "Vice President" },
      { name: "Varun Nayyar", role: "Treasurer" },
      { name: "Miriam Greenbaum", role: "Secretary" },
      { name: "Teresa Wu", role: "Arc Delegate" }
    ],
    directorList: [
      { role: "Education", directors: ["Brendan Trinh"] },
      {
        role: "Events",
        directors: ["Suman Prusty", "Jonathan Wong"]
      },
      { role: "IT", directors: ["Ahmed Abrar Hannan"] },
      { role: "Marketing", directors: ["Vivian Zhang"] },
      { role: "Sponsorships", directors: ["Treves Li", "Timothy Nguyen"] }
    ],
    subcommittee: [
      {
        role: "General",
        members: [
          "Brian Lam",
          "Caroline Xie",
          "Harry Gibbs",
          "Henderson Koh",
          "Hubert Wan",
          "Ivy Lin",
          "Jeffery Wu",
          "Jonathan Kim Sing",
          "Manishka Parekh",
          "Marshall Li",
          "Michela Castagnone",
          "Patrick Wong",
          "Robert Tan",
          "Salley Wang",
          "Theresa Ortiz",
          "Toby Walmsley",
          "Yonas Tibebu"
        ]
      }
    ]
  },
  {
    year: 2014,
    execList: [
      { name: "Gary Liang", role: "President" },
      { name: "Haris Mustafa", role: "Vice President" },
      { name: "William Li", role: "Treasurer" },
      { name: "Yongzhen Chen", role: "Arc Delegate" }
    ],
    directorList: [
      {
        role: "Secretary & Public Relations",
        directors: ["Miriam Greenbaum", "Elsa Wong"]
      },
      {
        role: "Events",
        directors: ["Johann Blanco", "Tim Nguyen"]
      },
      { role: "Sponsorships", directors: ["Liron Hayman"] }
    ],
    subcommittee: []
  },
  {
    year: 2013,
    execList: [
      { name: "Barton Lee", role: "President" },
      { name: "Varun Nayyar", role: "Vice President" },
      { name: "Alexander Vatiliotis", role: "Treasurer" }
    ],
    directorList: [
      {
        role: "Secretary & Public Relations",
        directors: ["Johann Blanco"]
      },
      {
        role: "Events",
        directors: ["Calvin Cheng", "Alicia Wong"]
      },
      {
        role: "Sponsorships",
        directors: ["Daniel Le"]
      },
      { role: "IT", directors: ["Anne Rong"] }
    ],
    subcommittee: []
  },
  {
    year: 2012,
    execList: [
      { name: "Daniel Le", role: "President" },
      { name: "Colin Zhang", role: "External VP" },
      { name: "Varun Nayyar", role: "Internal VP" }
    ],
    directorList: [
      { role: "Social Events", directors: ["Tonia Shen"] },
      { role: "Publications", directors: ["Johann Blanco"] },
      {
        role: "Secretary & Public Relations",
        directors: ["Georgia Tsambos"]
      },
      { role: "Sponsorships", directors: ["Peter Ayre"] }
    ],
    subcommittee: []
  }
];

export default pastTeamData;
