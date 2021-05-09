interface execPerson {
  name: string;
  role:
    | "president"
    | "vice-president"
    | "secretary"
    | "treasurer"
    | "arc delegate"
    | "external VP"
    | "internal VP";
}

interface directorPerson {
  name: string;
}

interface directorRole {
  role:
    | "education"
    | "corporate events"
    | "social events"
    | "human resources"
    | "IT"
    | "marketing"
    | "sponsorships"
    | "events"
    // eslint-disable-next-line quotes
    | "women's"
    | "outreach"
    | "secretary & public relations"
    | "publications";
  directors: Array<directorPerson>;
}

interface subcommitteeData {
  role:
    | "education"
    | "corporate events"
    | "social events"
    | "human resources"
    | "IT"
    | "marketing"
    | "sponsorships"
    | "events"
    | "general";
  members: Array<string>;
}

interface yearTeamData {
  year: number;
  execList: Array<execPerson>;
  directorList: Array<directorRole>;
  subcommittee: Array<subcommitteeData> | null;
}

const pastTeamData: Array<yearTeamData> = [
  {
    year: 2020,
    execList: [
      { name: "James Gao", role: "president" },
      { name: "Yuseph Ma", role: "vice-president" },
      { name: "Rui Tong", role: "treasurer" },
      { name: "Grace Li", role: "secretary" },
      { name: "Jason Zhao", role: "arc delegate" }
    ],
    directorList: [
      {
        role: "education",
        directors: [{ name: "Gerald Huang" }, { name: "Abdellah Islam" }, { name: "Alex Zhu" }]
      },
      { role: "corporate events", directors: [{ name: "Winston Sun" }, { name: "Lauren Wu" }] },
      { role: "social events", directors: [{ name: "Wendy Zhang" }, { name: "Philton Zhu" }] },
      { role: "IT", directors: [{ name: "Ethan Brown" }] },
      { role: "marketing", directors: [{ name: "Isabella Falanga" }, { name: "Celeste Thomson" }] },
      { role: "sponsorships", directors: [{ name: "Christopher Wu" }, { name: "Nancy Yu" }] }
    ],
    subcommittee: [
      {
        role: "education",
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
        role: "corporate events",
        members: ["Catherine Kwon", "Ting Li", "Vedant Rampal", "CJordan Shen", "Vivian Wong"]
      },
      {
        role: "social events",
        members: ["Jason Cao", "Merry Chu", "Kathryn Dalton", "Nafis Dewan", "Angie Geng"]
      },
      { role: "human resources", members: ["Justin Clarke", "Lauren Huynh"] },
      {
        role: "marketing",
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
      { name: "Eugenia Cao", role: "president" },
      { name: "Andrew Antony", role: "vice-president" },
      { name: "David Wassef", role: "treasurer" },
      { name: "Samir Mustavi", role: "secretary" },
      { name: "Stephanie Tong", role: "arc delegate" }
    ],
    directorList: [
      { role: "education", directors: [{ name: "Rui Tong" }, { name: "James Gao" }] },
      {
        role: "events",
        directors: [{ name: "Arnav Roy" }, { name: "Matthew Xu" }, { name: "Derek Sun" }]
      },
      { role: "IT", directors: [{ name: "Lucy Qiu" }] },
      { role: "marketing", directors: [{ name: "Grace Li" }, { name: "Spencer Yang" }] },
      { role: "sponsorships", directors: [{ name: "Odelia Sze-To" }, { name: "James Lu" }] }
    ],
    subcommittee: [
      {
        role: "education",
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
        role: "events",
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
        role: "marketing",
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
      { name: "Shahbaz Bains", role: "president" },
      { name: "Justin Huang", role: "vice-president" },
      { name: "Philippa Ma", role: "treasurer" },
      { name: "Andrew Antony", role: "secretary" },
      { name: "Yifan Shen", role: "arc delegate" }
    ],
    directorList: [
      {
        role: "education",
        directors: [{ name: "Alexander Pu Ling" }, { name: "Kevin Ge" }]
      },
      {
        role: "events",
        directors: [{ name: "Samir Mustavi" }, { name: "David Wassef" }, { name: "Eugenia Cao" }]
      },
      { role: "IT", directors: [{ name: "Gal Aharon" }] },
      {
        role: "marketing",
        directors: [{ name: "Andy Nguyen" }, { name: "Elie Sikh" }, { name: "Baktiar Niloy" }]
      },
      {
        role: "sponsorships",
        directors: [{ name: "Brendon Yang" }, { name: "Stephanie Tong" }, { name: "Amitoze Singh" }]
      }
    ],
    subcommittee: [
      {
        role: "education",
        members: ["Steven Chung", "Hawk Ji", "Yuyu Ma", "Jim Ng", "Jessica Nguyen", "Melantha Wang"]
      },
      {
        role: "events",
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
        role: "marketing",
        members: ["Grace Li", "Renée Lu", "Lachlan Sue", "Spencer Yang", "Raymond Zhang"]
      },
      { role: "IT", members: ["Sage Barreda", "Aaron Chin", "Nayeem Haque", "Kevin Lu"] }
    ]
  },
  {
    year: 2017,
    execList: [
      { name: "Robert Tan", role: "president" },
      { name: "Toby Walmsley", role: "vice-president" },
      { name: "Connie Kuo", role: "treasurer" },
      { name: "Suman Prusty", role: "secretary" },
      { name: "Sally Wang", role: "arc delegate" }
    ],
    directorList: [
      {
        role: "education",
        directors: [{ name: "Dominic Palanca" }, { name: "Aaron Hassan" }]
      },
      {
        role: "events",
        directors: [{ name: "Philippa Ma" }, { name: "Henderson Koh" }]
      },
      { role: "IT", directors: [{ name: "Amitoze Singh" }] },
      { role: "marketing", directors: [{ name: "Yifan Shen" }] },
      { role: "sponsorships", directors: [{ name: "Shahbaz Bains" }, { name: "Vishaal Nathan" }] },
      // eslint-disable-next-line quotes
      { role: "women's", directors: [{ name: "Julia Renouf" }] },
      { role: "outreach", directors: [{ name: "Andrew Antony" }] }
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
      { name: "Treves Li", role: "president" },
      { name: "Miriam Greenbaum", role: "vice-president" },
      { name: "Robert Tan", role: "treasurer" },
      { name: "Toby Walmsley", role: "secretary" },
      { name: "Yongzhen Chen", role: "arc delegate" }
    ],
    directorList: [
      {
        role: "education",
        directors: [{ name: "Henderson Koh" }, { name: "Vishaal Nathan" }]
      },
      {
        role: "events",
        directors: [{ name: "Jamie Priest" }, { name: "Sally Wang" }]
      },
      { role: "IT", directors: [{ name: "Brendan Trinh" }] },
      { role: "marketing", directors: [{ name: "Mary Chen" }] },
      { role: "sponsorships", directors: [{ name: "Jack Gan" }, { name: "Yang Hu" }] }
    ],
    subcommittee: null
  },
  {
    year: 2015,
    execList: [
      { name: "Treves Li & Gary Liang", role: "president" },
      { name: "Timothy Nguyen & Daniel Le", role: "vice-president" },
      { name: "Varun Nayyar", role: "treasurer" },
      { name: "Miriam Greenbaum", role: "secretary" },
      { name: "Teresa Wu", role: "arc delegate" }
    ],
    directorList: [
      { role: "education", directors: [{ name: "Brendan Trinh" }] },
      {
        role: "events",
        directors: [{ name: "Suman Prusty" }, { name: "Jonathan Wong" }]
      },
      { role: "IT", directors: [{ name: "Ahmed Abrar Hannan" }] },
      { role: "marketing", directors: [{ name: "Vivian Zhang" }] },
      { role: "sponsorships", directors: [{ name: "Treves Li" }, { name: "Timothy Nguyen" }] }
    ],
    subcommittee: null
  },
  {
    year: 2014,
    execList: [
      { name: "Gary Liang", role: "president" },
      { name: "Haris Mustafa", role: "vice-president" },
      { name: "William Li", role: "treasurer" },
      { name: "Yongzhen Chen", role: "arc delegate" }
    ],
    directorList: [
      {
        role: "secretary & public relations",
        directors: [{ name: "Miriam Greenbaum" }]
      },
      {
        role: "events",
        directors: [{ name: "Johann Blanco" }, { name: "Tim Nguyen" }]
      }
      // { role: 'sponsorships', directors: [{ name: '' }] } NOTE missing spons
    ],
    subcommittee: null
  },
  {
    year: 2013,
    execList: [
      { name: "Barton Lee", role: "president" },
      { name: "Varun Nayyar", role: "vice-president" },
      { name: "Alexander Vatiliotis", role: "treasurer" }
    ],
    directorList: [
      {
        role: "secretary & public relations",
        directors: [{ name: "Johann Blanco" }]
      },
      {
        role: "events",
        directors: [{ name: "Calvin Cheng" }, { name: "Alicia Wong" }]
      }
    ],
    subcommittee: null
  },
  {
    year: 2012,
    execList: [
      { name: "Daniel Le", role: "president" },
      { name: "Colin Zhang", role: "external VP" },
      { name: "Varun Nayyar", role: "internal VP" }
    ],
    directorList: [
      { role: "social events", directors: [{ name: "Tonia Shen" }] },
      { role: "publications", directors: [{ name: "Johann Blanco" }] },
      {
        role: "secretary & public relations",
        directors: [{ name: "Georgia Tsambos" }]
      },
      { role: "sponsorships", directors: [{ name: "Peter Ayre" }] }
    ],
    subcommittee: null
  }
];

export default pastTeamData;
