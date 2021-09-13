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
const examBankData: revisionTile[] = [
  {
    courseCode: "MATH1081",
    courseTitle: "Discrete Mathematics (Labs)",
    revisionLinks: [
      {
        groupHeader: "",
        groupLinks: [
          {
            name: "2019T3 Lab Test 1 Solutions",
            path: "/files/examBank/MATH1081/MATH1081_T3_Labtest1_2019.pdf"
          },
          {
            name: "2019T3 Lab Test 2 Solutions",
            path: "/files/examBank/MATH1081/MATH1081_T3_Labtest2_2019.pdf"
          }
        ]
      }
    ]
  },
  {
    courseCode: "MATH1131/MATH1141",
    courseTitle: "(Higher) Mathematics 1A",
    revisionLinks: [
      {
        groupHeader: "",
        groupLinks: [
          {
            name: "2019 Test 1 Calculus",
            path: "/files/examBank/MATH1131_MATH1141/MATH1131_1141_Labtest1_Calculus_2019.pdf"
          },
          {
            name: "2019T3 Test 1 Algebra",
            path: "/files/examBank/MATH1131_MATH1141/MATH1131_1141_Labtest1_Algebra_2019.pdf"
          },
          {
            name: "2019 Test 2 Calculus",
            path: "/files/examBank/MATH1131_MATH1141/MATH1131_1141_Labtest2_Calculus_2019.pdf"
          },
          {
            name: "2019 Test 2 Algebra",
            path: "/files/examBank/MATH1131_MATH1141/MATH1131_1141_Labtest2_Algebra_2019.pdf"
          }
        ]
      }
    ]
  },
  {
    courseCode: "MATH1231/MATH1241",
    courseTitle: "(Higher) Mathematics 1B",
    revisionLinks: [
      {
        groupHeader: "",
        groupLinks: [
          {
            name: "2020 Test 1 Calculus",
            path: "/files/examBank/MATH1231_MATH1241/MATH1231_1241_Labtest1_Calculus_2020.pdf"
          },
          {
            name: "2019 Test 1 Algebra",
            path: "/files/examBank/MATH1231_MATH1241/MATH1231_1241_Labtest1_Algebra_2019.pdf"
          },
          {
            name: "2019 Test 2 Algebra",
            path: "/files/examBank/MATH1231_MATH1241/MATH1231_1241_Labtest2_Algebra_2019.pdf"
          },
          {
            name: "2019 Test 2 Calculus",
            path: "/files/examBank/MATH1231_MATH1241/MATH1231_1241_Labtest2_Calculus_2019.pdf"
          }
        ]
      }
    ]
  },
  {
    courseCode: "MATH1151",
    courseTitle: "Mathematics for Actuarial Studies and Finance 1A",
    revisionLinks: [
      {
        groupHeader: "",
        groupLinks: [
          {
            name: "2008 Test 1 Algebra",
            path: "/files/examBank/MATH1151/MATH1151_Test_1_Algebra_2008.pdf"
          },
          {
            name: "2008 Test 1 Calculus",
            path: "/files/examBank/MATH1151/MATH1151_Test_1_Calculus_2008.pdf"
          },
          {
            name: "2008 Test 2 Algebra",
            path: "/files/examBank/MATH1151/MATH1151_Test_2_Algebra_2008.pdf"
          },
          {
            name: "2008 Test 2 Calculus",
            path: "/files/examBank/MATH1151/MATH1151_Test_2_Calculus_2008.pdf"
          }
        ]
      }
    ]
  },
  {
    courseCode: "MATH1251",
    courseTitle: "Mathematics for Actuarial Studies and Finance 1B",
    revisionLinks: [
      {
        groupHeader: "",
        groupLinks: [
          { name: "2018 Algebra", path: "/files/examBank/MATH1251/MATH1251_Algebra_2018.pdf" },
          { name: "2018 Calculus", path: "/files/examBank/MATH1251/MATH1251_Calculus_2018.pdf" }
        ]
      }
    ]
  },
  {
    courseCode: "MATH2621",
    courseTitle: "Higher Complex Analysis",
    revisionLinks: [
      {
        groupHeader: "",
        groupLinks: [
          {
            name: "2018 Homework Worked Solutions",
            path: "/files/examBank/MATH2621/MATH2621_Worked_HW_Solutions_2018.pdf"
          }
        ]
      }
    ]
  }
];

export const oldExamBankData: revisionTile[] = [
  {
    courseCode: "MATH1081",
    courseTitle: "Discrete Mathematics (Labs)",
    revisionLinks: [
      {
        groupHeader: "",
        groupLinks: [
          {
            name: "2008S1 Test 1 Solutions",
            path: "/files/examBank/MATH1081/MATH1081_Test_1_Solutions_2008.pdf"
          },
          {
            name: "2008S1 Test 2 Solutions",
            path: "/files/examBank/MATH1081/MATH1081_Test_2_Solutions_2008.pdf"
          },
          {
            name: "2008S1 Test 2 Solutions",
            path: "/files/examBank/MATH1081/MATH1081_Test_2_Semester_2_2008.pdf"
          },
          {
            name: "2008S1 Test 3 Solutions",
            path: "/files/examBank/MATH1081/MATH1081_Test_3_Solutions_2008.pdf"
          },
          {
            name: "2008S1 Test 3 Solutions",
            path: "/files/examBank/MATH1081/MATH1081_Test_3_Semester_2_2008.pdf"
          },
          {
            name: "2008S1 Test 4 Solutions",
            path: "/files/examBank/MATH1081/MATH1081_Test_4_Solutions_2008.pdf"
          },
          {
            name: "2008S1 Test 4 Solutions",
            path: "/files/examBank/MATH1081/MATH1081_Test_4_Semester_2_2008.pdf"
          }
        ]
      }
    ]
  },
  //NEXT TILE
  {
    courseCode: "MATH1131/MATH1141",
    courseTitle: "(Higher) Mathematics 1A",
    revisionLinks: [
      {
        groupHeader: "",
        groupLinks: [
          {
            name: "2014 Test 1 Algebra",
            path: "/files/examBank/MATH1131_MATH1141/MATH1131_1141_Test_1_Algebra_2014.pdf"
          },
          {
            name: "2014 Test 2 Algebra",
            path: "/files/examBank/MATH1131_MATH1141/MATH1131_1141_Test_2_Algebra_2014.pdf"
          },
          {
            name: "2008 Test 1 Calculus",
            path: "/files/examBank/MATH1131_MATH1141/MATH1131_1141_Test_1_Calculus_2008.pdf"
          },
          {
            name: "2009 Test 2 Calculus",
            path: "/files/examBank/MATH1131_MATH1141/MATH1131_1141_Test_2_Calculus_2009.pdf"
          }
        ]
      }
    ]
  },
  //NEXT TILE
  {
    courseCode: "MATH1231/MATH1241",
    courseTitle: "(Higher) Mathematics 1B",
    revisionLinks: [
      {
        groupHeader: "",
        groupLinks: [
          {
            name: "2007 Test 1 Calculus",
            path: "/files/examBank/MATH1231_MATH1241/MATH1231_1241_Algebra_Test_1_2007.pdf"
          },
          {
            name: "2008 Test 1 Calculus",
            path: "/files/examBank/MATH1231_MATH1241/MATH1231_1241_Calculus_Test_1_2008.pdf"
          },
          {
            name: "2009 Test 2 Algebra",
            path: "/files/examBank/MATH1231_MATH1241/MATH1231_1241_Algebra_Test_2_2009.pdf"
          },
          {
            name: "2008 Test 2 Calculus",
            path: "/files/examBank/MATH1231_MATH1241/MATH1231_1241_Calculus_Test_2_2008.pdf"
          }
        ]
      }
    ]
  },
  //NEXT TILE
  // {
  //   courseCode: "MATH1151",
  //   courseTitle: "Mathematics for Actuarial Studies and Finance 1A",
  //   revisionLinks: [
  //     {
  //       groupHeader: "",
  //       groupLinks: []
  //     }
  //   ]
  // },
  //NEXT TILE
  {
    courseCode: "MATH1251",
    courseTitle: "Mathematics for Actuarial Studies and Finance 1B",
    revisionLinks: [
      {
        groupHeader: "",
        groupLinks: [
          {
            name: "2010 Algebra - Course Pack Solutions",
            path: "/files/examBank/MATH1251/MATH1251_Algebra_Course_Pack_Solutions_2010.pdf"
          },
          {
            name: "2010 Calculus - Course Pack Solutions",
            path: "/files/examBank/MATH1251/MATH1251_Calculus_Course_Pack_Solutions_2010.pdf"
          }
        ]
      }
    ]
  }
  //NEXT TILE
  // {
  //   courseCode: "MATH2621",
  //   courseTitle: "Higher Complex Analysis",
  //   revisionLinks: [
  //     {
  //       groupHeader: "",
  //       groupLinks: [
  //         {
  //           name: "Homework Worked Solutions",
  //           path: ""
  //         }
  //       ]
  //     }
  //   ]
  // }
];

export default examBankData;
