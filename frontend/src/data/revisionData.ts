/*TODO: messy structure...*/
export interface revisionTile {
  courseCode: string;
  courseTitle: string;
  revisionLinks: groups[];
}

export interface groups {
  groupHeader: string;
  groupLinks: links[];
}

export interface links {
  name: string;
  path: string;
}

/* TEMPLATE:
  {
    courseCode: "",
    courseTitle: "",
    revisionLinks: [
      {
        groupHeader: "",
        groupLinks: [
          {
            name: "",
            path: "",
          },
        ],
      },
    ],
  },
*/

/*TODO: revision paths*/
const revisionData: revisionTile[] = [
  //NEXT TILE
  {
    courseCode: "MATH1031",
    courseTitle: "Mathematics for Life Sciences",

    revisionLinks: [
      {
        groupHeader: "2020, T3 Revision Seminar",
        groupLinks: [
          {
            name: "Mathematics for Life Sciences (all)",
            path: ""
          }
        ]
      }
    ]
  },
  //NEXT TILE
  {
    courseCode: "MATH1041",
    courseTitle: "Statistics for Life and Social Science",
    revisionLinks: [
      {
        groupHeader: "2020, T3 Revision Seminar",
        groupLinks: [
          {
            name: "Statistics for Life and Social Science (all)",
            path: ""
          }
        ]
      }
    ]
  },
  //NEXT TILE
  {
    courseCode: "MATH1081",
    courseTitle: "Discrete Mathematics",
    revisionLinks: [
      {
        groupHeader: "2021, T1 Revision Seminar",
        groupLinks: [
          {
            name: "Revision Workshop",
            path: ""
          }
        ]
      },
      {
        groupHeader: "2020, T3 Revision Handout",
        groupLinks: [
          {
            name: "Revision Handout",
            path: ""
          }
        ]
      },
      {
        groupHeader: "2020, T1 Revision Seminar",
        groupLinks: [
          {
            name: "Chapter 1,2,5 - Sets, Integers & Graphs",
            path: ""
          },
          {
            name: "Sets & Functions Solutions",
            path: ""
          },
          {
            name: "Relations & Graphs Solutions",
            path: ""
          },
          {
            name: "Chapter 3,4 - Proofs & Combinatorics",
            path: ""
          },
          {
            name: "Proofs & Combinatorics Solutions",
            path: ""
          }
        ]
      },
      {
        groupHeader: "2019, T1 Revision Seminar",
        groupLinks: [
          {
            name: "Chapter 1,2,5 - Sets, Integers & Graphs",
            path: ""
          },
          {
            name: "Sets, Integers & Graphs Solutions",
            path: ""
          },
          {
            name: "Chapter 3,4 - Proofs & Combinatorics",
            path: ""
          }
        ]
      }
    ]
  },
  //NEXT TILE
  {
    courseCode: "MATH1131/1141",
    courseTitle: "Mathematics 1A",

    revisionLinks: [
      {
        groupHeader: "2021, T1 Revision Seminar",
        groupLinks: [
          {
            name: "Revision Handout",
            path: ""
          },
          {
            name: "Algebra and Calculus",
            path: ""
          }
        ]
      },
      {
        groupHeader: "2020, T1 Revision Seminar",
        groupLinks: [
          {
            name: "Algebra",
            path: ""
          },
          {
            name: "Calculus",
            path: ""
          },
          {
            name: "Calculus Solutions",
            path: ""
          }
        ]
      },
      {
        groupHeader: "2019, T3 Revision Seminar",
        groupLinks: [
          {
            name: "Algebra & Calculus",
            path: ""
          },
          {
            name: "Algebra & Calculus Solutions",
            path: ""
          }
        ]
      },
      {
        groupHeader: "2019, T1 Revision Seminar",
        groupLinks: [
          {
            name: "Algebra",
            path: ""
          },
          {
            name: "Calculus",
            path: ""
          },
          {
            name: "Calculus Solutions",
            path: ""
          }
        ]
      },
      {
        groupHeader: "2017, T3 Revision Seminar",
        groupLinks: [
          {
            name: "Algebra",
            path: ""
          },
          {
            name: "Algebra Solutions",
            path: ""
          },
          {
            name: "Calculus",
            path: ""
          },
          {
            name: "Calculus Solutions",
            path: ""
          }
        ]
      }
    ]
  },
  //NEXT TILE
  {
    courseCode: "MATH1231/1241",
    courseTitle: "Mathematics 1B",

    revisionLinks: [
      {
        groupHeader: "2021, T1 Revision Seminar",
        groupLinks: [
          {
            name: "Algebra",
            path: ""
          },
          {
            name: "Calculus",
            path: ""
          }
        ]
      },
      {
        groupHeader: "2019, T2 Revision Seminar",
        groupLinks: [
          {
            name: "Algebra",
            path: ""
          },
          {
            name: "Algebra Solutions",
            path: ""
          },
          {
            name: "Calculus",
            path: ""
          },
          {
            name: "Calculus Solutions for Part 1",
            path: ""
          }
        ]
      },
      {
        groupHeader: "2017, S2 Revision Seminar",
        groupLinks: [
          {
            name: "Algebra",
            path: ""
          },
          {
            name: "Algebra Solutions",
            path: ""
          },
          {
            name: "Calculus",
            path: ""
          },
          {
            name: "Calculus Solutions",
            path: ""
          }
        ]
      }
    ]
  },
  {
    courseCode: "MATH2011/2111",
    courseTitle: "Several Variable Calculus",

    revisionLinks: [
      {
        groupHeader: "2021, T1 Revision Seminar",
        groupLinks: [
          {
            name: "Full Revision Seminar Workshop",
            path: ""
          }
        ]
      },
      {
        groupHeader: "2020, T1 Revision Seminar",
        groupLinks: [
          {
            name: "Differential Calculus",
            path: ""
          },
          {
            name: "Integral Calculus",
            path: ""
          },
          {
            name: "Vector Calculus",
            path: ""
          },
          {
            name: "Vector Calculus Solutions",
            path: ""
          },
          {
            name: "Analysis (MATH2111)",
            path: ""
          }
        ]
      },
      {
        groupHeader: "2019, T1 Revision Seminar",
        groupLinks: [
          {
            name: "Differential Calculus/Multiple Integrals (1/2)",
            path: ""
          },
          {
            name: "Vector Calculus/Analysis (2/2)",
            path: ""
          },
          {
            name: "Revision Seminar Solutions",
            path: ""
          }
        ]
      }
    ]
  },
  {
    courseCode: "MATH2018/2019",
    courseTitle: "Enginering Mathematics 2D/E",

    revisionLinks: [
      {
        groupHeader: "2021, T1 Revision Seminar",
        groupLinks: [
          {
            name: "Revision Seminar Workshop",
            path: ""
          }
        ]
      },
      {
        groupHeader: "2020, T1 Revision Seminar",
        groupLinks: [
          {
            name: "Seminar (1/2)",
            path: ""
          },
          {
            name: "Seminar Solutions (1/2)",
            path: ""
          },
          {
            name: "Seminar (2/2)",
            path: ""
          },
          {
            name: "Seminar Solutions (2/2)",
            path: ""
          }
        ]
      }
    ]
  },
  {
    courseCode: "MATH2089",
    courseTitle: "Numerical Methods and Statistics",

    revisionLinks: [
      {
        groupHeader: "2021, T1 Revision Seminar",
        groupLinks: [
          {
            name: "Revision Seminar Workshop",
            path: ""
          },
          {
            name: "MATLAB, Parabolic Equation",
            path: ""
          }
        ]
      },
      {
        groupHeader: "2020, T2 Revision Seminar",
        groupLinks: [
          {
            name: "Numerical Methods",
            path: ""
          },
          {
            name: "Statistics",
            path: ""
          }
        ]
      }
    ]
  },
  {
    courseCode: "MATH2121/2221",
    courseTitle: "Theory and Applications of Differential Equations",

    revisionLinks: [
      {
        groupHeader: "2020, T2 Revision Seminar",
        groupLinks: [
          {
            name: "Seminar (1/2)",
            path: ""
          },
          {
            name: "Seminar (2/2)",
            path: ""
          }
        ]
      },
      {
        groupHeader: "2019, T2 Revision Seminar",
        groupLinks: [
          {
            name: "Differential Equations",
            path: ""
          },
          {
            name: "Solutions for Part 1",
            path: ""
          }
        ]
      }
    ]
  },
  {
    courseCode: "MATH2501/2601",
    courseTitle: "Linear Algebra",

    revisionLinks: [
      {
        groupHeader: "2020, T2 Revision Seminar",
        groupLinks: [
          {
            name: "Seminar (1/2)",
            path: ""
          },
          {
            name: "Seminar (2/2)",
            path: ""
          }
        ]
      },
      {
        groupHeader: "2019, T2 Revision Seminar",
        groupLinks: [
          {
            name: "Seminar (1/2)",
            path: ""
          },
          {
            name: "Seminar Solutions (1/2)",
            path: ""
          },
          {
            name: "Seminar (2/2)",
            path: ""
          },
          {
            name: "Abstract Algebra Supplement Solutions",
            path: ""
          }
        ]
      }
    ]
  },
  {
    courseCode: "MATH2521/2621",
    courseTitle: "Complex Analysis",

    revisionLinks: [
      {
        groupHeader: "2020, T3 Revision Seminar",
        groupLinks: [
          {
            name: "Complex Analysis (all)",
            path: ""
          }
        ]
      },
      {
        groupHeader: "2019, T3 Revision Seminar",
        groupLinks: [
          {
            name: "Complex Analysis (all)",
            path: ""
          },
          {
            name: "Complex Analysis Solutions (all)",
            path: ""
          }
        ]
      }
    ]
  },
  {
    courseCode: "MATH2801/2901",
    courseTitle: "Theory of Statistics",

    revisionLinks: [
      {
        groupHeader: "2020, T2 Revision Seminar (Collab with UNSW StatSoc)",
        groupLinks: [
          {
            name: "Theory of Statistics (all)",
            path: ""
          }
        ]
      },
      {
        groupHeader: "2019, T3 Revision Seminar (Collab with UNSW StatSoc)",
        groupLinks: [
          {
            name: "Seminar (1/2)",
            path: ""
          },
          {
            name: "Seminar (2/2)",
            path: ""
          }
        ]
      }
    ]
  }
];

export default revisionData;
