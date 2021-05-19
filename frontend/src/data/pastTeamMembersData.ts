interface execPerson {
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

interface directorPerson {
  name: string;
}

interface directorRole {
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
  directors: Array<directorPerson>;
}

interface subcommitteeData {
  role:
    | "Education"
    | "Corporate Events"
    | "Social Events"
    | "Human Resources"
    | "IT"
    | "Marketing"
    | "Sponsorships"
    | "Events"
    | "general";
  members: Array<string>;
}

export interface yearTeamData {
  year: number;
  execList: Array<execPerson>;
  directorList: Array<directorRole>;
  subcommittee: Array<subcommitteeData> | null;
}

const pastTeamData: Array<yearTeamData> = [
  {
    year: 2020,
    execList: [
      { name: "James Gao", role: "President" },
      { name: "Yuseph Ma", role: "Vice President" },
      { name: "Rui Tong", role: "Treasurer" },
      { name: "Grace Li", role: "Secretary" },
      { name: "Jason Zhao", role: "Arc Delegate" }
    ],
    directorList: [
      {
        role: "Education",
        directors: [{ name: "Gerald Huang" }, { name: "Abdellah Islam" }, { name: "Alex Zhu" }]
      },
      { role: "Corporate Events", directors: [{ name: "Winston Sun" }, { name: "Lauren Wu" }] },
      { role: "Social Events", directors: [{ name: "Wendy Zhang" }, { name: "Philton Zhu" }] },
      { role: "IT", directors: [{ name: "Ethan Brown" }] },
      { role: "Marketing", directors: [{ name: "Isabella Falanga" }, { name: "Celeste Thomson" }] },
      { role: "Sponsorships", directors: [{ name: "Christopher Wu" }, { name: "Nancy Yu" }] }
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
        members: ["Catherine Kwon", "Ting Li", "Vedant Rampal", "CJordan Shen", "Vivian Wong"]
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
      { name: "David Wassef", role: "Treasurer" },
      { name: "Samir Mustavi", role: "Secretary" },
      { name: "Stephanie Tong", role: "Arc Delegate" }
    ],
    directorList: [
      { role: "Education", directors: [{ name: "Rui Tong" }, { name: "James Gao" }] },
      {
        role: "Events",
        directors: [{ name: "Arnav Roy" }, { name: "Matthew Xu" }, { name: "Derek Sun" }]
      },
      { role: "IT", directors: [{ name: "Lucy Qiu" }] },
      { role: "Marketing", directors: [{ name: "Grace Li" }, { name: "Spencer Yang" }] },
      { role: "Sponsorships", directors: [{ name: "Odelia Sze-To" }, { name: "James Lu" }] }
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
      { name: "Philippa Ma", role: "Treasurer" },
      { name: "Andrew Antony", role: "Secretary" },
      { name: "Yifan Shen", role: "Arc Delegate" }
    ],
    directorList: [
      {
        role: "Education",
        directors: [{ name: "Alexander Pu Ling" }, { name: "Kevin Ge" }]
      },
      {
        role: "Events",
        directors: [{ name: "Samir Mustavi" }, { name: "David Wassef" }, { name: "Eugenia Cao" }]
      },
      { role: "IT", directors: [{ name: "Gal Aharon" }] },
      {
        role: "Marketing",
        directors: [{ name: "Andy Nguyen" }, { name: "Elie Sikh" }, { name: "Baktiar Niloy" }]
      },
      {
        role: "Sponsorships",
        directors: [{ name: "Brendon Yang" }, { name: "Stephanie Tong" }, { name: "Amitoze Singh" }]
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
      { name: "Connie Kuo", role: "Treasurer" },
      { name: "Suman Prusty", role: "Secretary" },
      { name: "Sally Wang", role: "Arc Delegate" }
    ],
    directorList: [
      {
        role: "Education",
        directors: [{ name: "Dominic Palanca" }, { name: "Aaron Hassan" }]
      },
      {
        role: "Events",
        directors: [{ name: "Philippa Ma" }, { name: "Henderson Koh" }]
      },
      { role: "IT", directors: [{ name: "Amitoze Singh" }] },
      { role: "Marketing", directors: [{ name: "Yifan Shen" }] },
      { role: "Sponsorships", directors: [{ name: "Shahbaz Bains" }, { name: "Vishaal Nathan" }] },
      // eslint-disable-next-line quotes
      { role: "Women's", directors: [{ name: "Julia Renouf" }] },
      { role: "Outreach", directors: [{ name: "Andrew Antony" }] }
    ],
    subcommittee: [
      {
        role: "general",
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
      { name: "Robert Tan", role: "Treasurer" },
      { name: "Toby Walmsley", role: "Secretary" },
      { name: "Yongzhen Chen", role: "Arc Delegate" }
    ],
    directorList: [
      {
        role: "Education",
        directors: [{ name: "Henderson Koh" }, { name: "Vishaal Nathan" }]
      },
      {
        role: "Events",
        directors: [{ name: "Jamie Priest" }, { name: "Sally Wang" }]
      },
      { role: "IT", directors: [{ name: "Brendan Trinh" }] },
      { role: "Marketing", directors: [{ name: "Mary Chen" }] },
      { role: "Sponsorships", directors: [{ name: "Jack Gan" }, { name: "Yang Hu" }] }
    ],
    subcommittee: null
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
      { role: "Education", directors: [{ name: "Brendan Trinh" }] },
      {
        role: "Events",
        directors: [{ name: "Suman Prusty" }, { name: "Jonathan Wong" }]
      },
      { role: "IT", directors: [{ name: "Ahmed Abrar Hannan" }] },
      { role: "Marketing", directors: [{ name: "Vivian Zhang" }] },
      { role: "Sponsorships", directors: [{ name: "Treves Li" }, { name: "Timothy Nguyen" }] }
    ],
    subcommittee: null
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
        directors: [{ name: "Miriam Greenbaum" }]
      },
      {
        role: "Events",
        directors: [{ name: "Johann Blanco" }, { name: "Tim Nguyen" }]
      }
      // { role: 'sponsorships', directors: [{ name: '' }] } NOTE missing spons
    ],
    subcommittee: null
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
        directors: [{ name: "Johann Blanco" }]
      },
      {
        role: "Events",
        directors: [{ name: "Calvin Cheng" }, { name: "Alicia Wong" }]
      }
    ],
    subcommittee: null
  },
  {
    year: 2012,
    execList: [
      { name: "Daniel Le", role: "President" },
      { name: "Colin Zhang", role: "External VP" },
      { name: "Varun Nayyar", role: "Internal VP" }
    ],
    directorList: [
      { role: "Social Events", directors: [{ name: "Tonia Shen" }] },
      { role: "Publications", directors: [{ name: "Johann Blanco" }] },
      {
        role: "Secretary & Public Relations",
        directors: [{ name: "Georgia Tsambos" }]
      },
      { role: "Sponsorships", directors: [{ name: "Peter Ayre" }] }
    ],
    subcommittee: null
  }
];

export default pastTeamData;
