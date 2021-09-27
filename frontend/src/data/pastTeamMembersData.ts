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
      }
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
      // eslint-disable-next-line quotes
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
      { role: "Sponsorships", directors: ["Jack Gan", "Yang Hu"] }
    ],
    subcommittee: []
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
    subcommittee: []
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
        directors: ["Miriam Greenbaum"]
      },
      {
        role: "Events",
        directors: ["Johann Blanco", "Tim Nguyen"]
      }
      // { role: 'sponsorships', directors: [{ name: '' }] } NOTE missing spons
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
      }
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
