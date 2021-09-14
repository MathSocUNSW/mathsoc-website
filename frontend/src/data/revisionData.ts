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
  {
    courseCode: "MATH1031",
    courseTitle: "Mathematics for Life Sciences",
    revisionLinks: [
      {
        groupHeader: "2020, T3 Revision Seminar",
        groupLinks: [
          {
            name: "Mathematics for Life Sciences (all)",
            path: "/files/revision/MATH1031/MATH1031_2020.pdf"
          }
        ]
      }
    ]
  },
  {
    courseCode: "MATH1041",
    courseTitle: "Statistics for Life and Social Science",
    revisionLinks: [
      {
        groupHeader: "2020, T3 Revision Seminar",
        groupLinks: [
          {
            name: "Statistics for Life and Social Science (all)",
            path: "/files/revision/MATH1041/MATH1041_2020.pdf"
          }
        ]
      }
    ]
  },
  {
    courseCode: "MATH1081",
    courseTitle: "Discrete Mathematics",
    revisionLinks: [
      {
        groupHeader: "2021, T1 Revision Seminar",
        groupLinks: [
          {
            name: "Revision Workshop",
            path: "/files/revision/MATH1081/MATH1081_Workshop_Term_1_2020.pdf"
          },
          {
            name: "Revision Sheet",
            path: "/files/revision/MATH1081/MATH1081_Revision_Sheet_Term_1_2021.pdf"
          }
        ]
      },
      {
        groupHeader: "2020, T3 Revision Handout",
        groupLinks: [
          {
            name: "Revision Handout",
            path: "/files/revision/MATH1081/MATH1081_Handout_Term_3_2020.pdf"
          }
        ]
      },
      {
        groupHeader: "2020, T1 Revision Seminar",
        groupLinks: [
          {
            name: "Chapter 1,2,5 - Sets, Integers & Graphs",
            path: "/files/revision/MATH1081/MATH1081_Part_1_Term_1_2020.pdf"
          },
          {
            name: "Sets & Functions Solutions",
            path: "/files/revision/MATH1081/MATH1081_Sets_Functions_Solutions_Term_1_2020.pdf"
          },
          {
            name: "Relations & Graphs Solutions",
            path: "/files/revision/MATH1081/MATH1081_Relations_Graphs_Solutions_Term_1_2020.pdf"
          },
          {
            name: "Chapter 3,4 - Proofs & Combinatorics",
            path: "/files/revision/MATH1081/MATH1081_Part_2_Term_1_2020.pdf"
          },
          {
            name: "Proofs & Combinatorics Solutions",
            path: "/files/revision/MATH1081/MATH1081_Proofs_Solutions_Term_1_2020.pdf"
          }
        ]
      },
      {
        groupHeader: "2019, T1 Revision Seminar",
        groupLinks: [
          {
            name: "Chapter 1,2,5 - Sets, Integers & Graphs",
            path: "/files/revision/MATH1081/MATH1081_Part_1_Solutions_Term_1_2019.pdf"
          },
          {
            name: "Sets, Integers & Graphs Solutions",
            path: "/files/revision/MATH1081/MATH1081_Part_1_Solutions_Term_1_2019.pdf"
          },
          {
            name: "Chapter 3,4 - Proofs & Combinatorics",
            path: "/files/revision/MATH1081/MATH1081_Part_2_Term_1_2019.pdf"
          }
        ]
      }
    ]
  },
  {
    courseCode: "MATH1131/1141",
    courseTitle: "Mathematics 1A",
    revisionLinks: [
      {
        groupHeader: "2021, T1 Revision Seminar",
        groupLinks: [
          {
            name: "Revision Handout",
            path: "/files/revision/MATH1131_1141/MATH1131_Essential_Formulas_and_Theorems_Term_1_2021.pdf"
          },
          {
            name: "Algebra and Calculus",
            path: "/files/revision/MATH1131_1141/MATH1131_1141_Workshop_Term_1_2021.pdf"
          }
        ]
      },
      {
        groupHeader: "2020, T1 Revision Seminar",
        groupLinks: [
          {
            name: "Algebra",
            path: "/files/revision/MATH1131_1141/MATH1131_Algebra_Term_1_2020.pdf"
          },
          {
            name: "Calculus",
            path: "/files/revision/MATH1131_1141/MATH1131_Calculus_Term_1_2020.pdf"
          },
          {
            name: "Calculus Solutions",
            path: "/files/revision/MATH1131_1141/MATH1131_Calculus_Solutions_Term_1_2020.pdf"
          }
        ]
      },
      {
        groupHeader: "2019, T3 Revision Seminar",
        groupLinks: [
          {
            name: "Algebra & Calculus",
            path: "/files/revision/MATH1131_1141/MATH1131_Workshop_Handout_Term_3_2019.pdf"
          },
          {
            name: "Algebra & Calculus Solutions",
            path: "/files/revision/MATH1131_1141/MATH1131_Workshop_Solutions_Term_3_2019.pdf"
          }
        ]
      },
      {
        groupHeader: "2019, T1 Revision Seminar",
        groupLinks: [
          {
            name: "Algebra",
            path: "/files/revision/MATH1131_1141/MATH1131_Algebra_Term_1_2019.pdf"
          },
          {
            name: "Calculus",
            path: "/files/revision/MATH1131_1141/MATH1131_Calculus_Term_1_2019.pdf"
          },
          {
            name: "Calculus Solutions",
            path: "/files/revision/MATH1131_1141/MATH1131_Calculus_Solutions_Term_1_2019.pdf"
          }
        ]
      },
      {
        groupHeader: "2017, T3 Revision Seminar",
        groupLinks: [
          {
            name: "Algebra",
            path: "/files/revision/MATH1131_1141/MATH1131_Algebra_Term_3_2017.pdf"
          },
          {
            name: "Algebra Solutions",
            path: "/files/revision/MATH1131_1141/MATH1131_Algebra_Solutions_Term_3_2017.pdf"
          },
          {
            name: "Calculus",
            path: "/files/revision/MATH1131_1141/MATH1131_Calculus_Term_3_2017.pdf"
          },
          {
            name: "Calculus Solutions",
            path: "/files/revision/MATH1131_1141/MATH1131_Calculus_Solutions_Term_3_2017.pdf"
          }
        ]
      }
    ]
  },
  {
    courseCode: "MATH1231/1241",
    courseTitle: "Mathematics 1B",
    revisionLinks: [
      {
        groupHeader: "2021, T2 Revision Seminar",
        groupLinks: [
          {
            name: "Algebra",
            path: "/files/revision/MATH1231_1241/MATH1231_Revision_Seminar_Algebra_Term_2_2021.pdf"
          },
          {
            name: "Calculus",
            path: "/files/revision/MATH1231_1241/MATH1231_Revision_Slides_Calculus_Term_2_2021.pdf"
          }
        ]
      },
      {
        groupHeader: "2020, T2 Revision Seminar",
        groupLinks: [
          {
            name: "Algebra",
            path: "/files/revision/MATH1231_1241/MATH1231_Algebra_Term_2_2020.pdf"
          },
          {
            name: "Calculus",
            path: "/files/revision/MATH1231_1241/MATH1231_Calculus_Term_2_2020.pdf"
          }
        ]
      },
      {
        groupHeader: "2019, T2 Revision Seminar",
        groupLinks: [
          {
            name: "Algebra",
            path: "/files/revision/MATH1231_1241/MATH1231_Algebra_Term_2_2019.pdf"
          },
          {
            name: "Algebra Solutions",
            path: "/files/revision/MATH1231_1241/MATH1231_Algebra_Solutions_Term_2_2019.pdf"
          },
          {
            name: "Calculus",
            path: "/files/revision/MATH1231_1241/MATH1231_Calculus_Term_2_2019.pdf"
          },
          {
            name: "Calculus Solutions for Part 1",
            path: "/files/revision/MATH1231_1241/MATH1231_Calculus_Solutions_Term_2_2019.pdf"
          }
        ]
      },
      {
        groupHeader: "2017, S2 Revision Seminar",
        groupLinks: [
          { name: "Algebra", path: "/files/revision/MATH1231_1241/MATH1231_Algebra_2017.pdf" },
          {
            name: "Algebra Solutions",
            path: "/files/revision/MATH1231_1241/MATH1231_Algebra_Solutions_2017.pdf"
          },
          { name: "Calculus", path: "/files/revision/MATH1231_1241/MATH1231_Calculus_2017.pdf" },
          {
            name: "Calculus Solutions",
            path: "/files/revision/MATH1231_1241/MATH1231_Calculus_Solutions_2017.pdf"
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
            path: "/files/revision/MATH2011_2111/MATH2111_Seminar_Term_1_2021.pdf"
          }
        ]
      },
      {
        groupHeader: "2020, T1 Revision Seminar",
        groupLinks: [
          {
            name: "Differential Calculus",
            path: "/files/revision/MATH2011_2111/MATH2011_Differential_Calculus_Term_1_2020.pdf"
          },
          {
            name: "Integral Calculus",
            path: "/files/revision/MATH2011_2111/MATH2011_Integral_Calculus_Term_1_2020.pdf"
          },
          {
            name: "Vector Calculus",
            path: "/files/revision/MATH2011_2111/MATH2011_Vector_Calculus_Term_1_2020.pdf"
          },
          {
            name: "Vector Calculus Solutions",
            path: "/files/revision/MATH2011_2111/MATH2011_Vector_Calculus_Solutions_Term_1_2020.pdf"
          },
          {
            name: "Analysis (MATH2111)",
            path: "/files/revision/MATH2011_2111/MATH2111_Analysis_of_Rn_Term_1_2020.pdf"
          }
        ]
      },
      {
        groupHeader: "2019, T1 Revision Seminar",
        groupLinks: [
          {
            name: "Differential Calculus/Multiple Integrals (1/2)",
            path: "/files/revision/MATH2011_2111/MATH2011_Part_1_Term_1_2019.pdf"
          },
          {
            name: "Vector Calculus/Analysis (2/2)",
            path: "/files/revision/MATH2011_2111/MATH2011_Part_2_Term_1_2019.pdf"
          },
          {
            name: "Revision Seminar Solutions",
            path: "/files/revision/MATH2011_2111/MATH2011_Solutions_Term_1_2019.pdf"
          }
        ]
      }
    ]
  },
  {
    courseCode: "MATH2018/2019",
    courseTitle: "Engineering Mathematics 2D/E",
    revisionLinks: [
      {
        groupHeader: "2021, T1 Revision Seminar",
        groupLinks: [
          {
            name: "Revision Seminar Workshop",
            path: "/files/revision/MATH2018_2019/MATH2019_Workshop_Term_1_2021.pdf"
          }
        ]
      },
      {
        groupHeader: "2020, T1 Revision Seminar",
        groupLinks: [
          {
            name: "Seminar (1/2)",
            path: "/files/revision/MATH2018_2019/MATH2018_Part_1_Term_1_2020.pdf"
          },
          {
            name: "Seminar Solutions (1/2)",
            path: "/files/revision/MATH2018_2019/MATH2018_Part_1_Solutions_Term_1_2020.pdf"
          },
          {
            name: "Seminar (2/2)",
            path: "/files/revision/MATH2018_2019/MATH2018_Part_2_Term_1_2020.pdf"
          },
          {
            name: "Seminar Solutions (2/2)",
            path: "/files/revision/MATH2018_2019/MATH2018_Part_2_Solutions_Term_1_2020.pdf"
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
            path: "/files/revision/MATH2089/MATH2089_Workshop_Term_1_2021.pdf"
          },
          {
            name: "MATLAB, Parabolic Equation",
            path: "/files/revision/MATH2089/MATH2089_Parabolic_Equation_Term_1_2021.mlx"
          }
        ]
      },
      {
        groupHeader: "2020, T2 Revision Seminar",
        groupLinks: [
          {
            name: "Numerical Methods",
            path: "/files/revision/MATH2089/MATH2089_Numerical_Methods_Slides_Term_2_2020.pdf"
          },
          {
            name: "Statistics",
            path: "/files/revision/MATH2089/MATH2089_2099_2859_CVEN2002_Statistics_Slides_Term_2_2020.pdf"
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
            path: "/files/revision/MATH2121_2221/MATH2121_Part_1_Term_2_2020.pdf"
          },
          {
            name: "Seminar (2/2)",
            path: "/files/revision/MATH2121_2221/MATH2121_Part_2_Term_2_2020.pdf"
          }
        ]
      },
      {
        groupHeader: "2019, T2 Revision Seminar",
        groupLinks: [
          {
            name: "Differential Equations",
            path: "/files/revision/MATH2121_2221/MATH2121_Term_2_2019.pdf"
          },
          {
            name: "Solutions for Part 1",
            path: "/files/revision/MATH2121_2221/MATH2121_Solutions_Term_2_2019.pdf"
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
        groupHeader: "2021, T2 Revision Seminar",
        groupLinks: [
          {
            name: "Seminar (1/2)",
            path: "/files/revision/MATH2501_2601/MATH2501_Part_1_Term_2_2021.pdf"
          },
          {
            name: "Seminar (2/2)",
            path: "/files/revision/MATH2501_2601/MATH2501_Part_2_Term_2_2021.pdf"
          }
        ]
      },
      {
        groupHeader: "2020, T2 Revision Seminar",
        groupLinks: [
          {
            name: "Seminar (1/2)",
            path: "/files/revision/MATH2501_2601/MATH2501_Part_1_Term_2_2020.pdf"
          },
          {
            name: "Seminar (2/2)",
            path: "/files/revision/MATH2501_2601/MATH2501_Part_2_Term_2_2020.pdf"
          }
        ]
      },
      {
        groupHeader: "2019, T2 Revision Seminar",
        groupLinks: [
          {
            name: "Seminar (1/2)",
            path: "/files/revision/MATH2501_2601/MATH2501_Part_1_Term_2_2019.pdf"
          },
          {
            name: "Seminar Solutions (1/2)",
            path: "/files/revision/MATH2501_2601/MATH2501_Part_1_Solutions_Term_2_2019.pdf"
          },
          {
            name: "Seminar (2/2)",
            path: "/files/revision/MATH2501_2601/MATH2501_Part_2_Term_2_2019.pdf"
          },
          {
            name: "Abstract Algebra Supplement Solutions",
            path: "/files/revision/MATH2501_2601/MATH2501_Supplement_Solutions_Term_2_2019.pdf"
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
            path: "/files/revision/MATH2521_2621/MATH2521_Term_3_2020.pdf"
          }
        ]
      },
      {
        groupHeader: "2019, T3 Revision Seminar",
        groupLinks: [
          {
            name: "Complex Analysis (all)",
            path: "/files/revision/MATH2521_2621/MATH2521_Term_3_2019.pdf"
          },
          {
            name: "Complex Analysis Solutions (all)",
            path: "/files/revision/MATH2521_2621/MATH2521_Solutions_Term_3_2019.pdf"
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
        groupHeader: "2021, T2 Revision Seminar",
        groupLinks: [
          {
            name: "Theory of Statistics (all)",
            path: "/files/revision/MATH2801_2901/MATH2801_2901_Workshop_1_2021.pdf"
          }
        ]
      },
      {
        groupHeader: "2020, T2 Revision Seminar (Collab with UNSW StatSoc)",
        groupLinks: [
          {
            name: "MATH2801/2901 Theory of Statistics (all)",
            path: "/files/revision/MATH2801_2901/MATH2801_Term_2_2020.pdf"
          }
        ]
      },
      {
        groupHeader: "2020, T2 Revision Seminar (Collab with UNSW StatSoc)",
        groupLinks: [
          {
            name: "MATH2901 Seminar (1/2)",
            path: "/files/revision/MATH2801_2901/MATH2901_Part_1_Term_2_2020.pdf"
          },
          {
            name: "MATH2901 Seminar (2/2)",
            path: "/files/revision/MATH2801_2901/MATH2901_Part_2_Term_2_2020.pdf"
          }
        ]
      }
    ]
  },
  {
    courseCode: "MATH2400",
    courseTitle: "Finite Mathematics",
    revisionLinks: [
      {
        groupHeader: "2021, T2 Revision Seminar",
        groupLinks: [
          {
            name: "MATH2400 Workshop",
            path: "/files/revision/MATH2400/MATH2400_Workshop_Term_2_2021.pdf"
          }
        ]
      }
    ]
  }
];

export default revisionData;
