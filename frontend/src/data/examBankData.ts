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
    courseCode: "MATH1031",
    courseTitle: "Mathematics for Life Sciences",
    revisionLinks: [
      {
        groupHeader: "Mastery Lab 1",
        groupLinks: [
          {
            name: "2019T3 Sample Solutions",
            path: "/files/resources/examBank/MATH1031/MATH1031_Mastery_Labtest_1_Solutions_2019T3.pdf"
          }
        ]
      },
      {
        groupHeader: "Mastery Lab 2",
        groupLinks: [
          {
            name: "2019T3 Sample Solutions",
            path: "/files/resources/examBank/MATH1031/MATH1031_Mastery_Labtest_2_Solutions_2019T3.pdf"
          }
        ]
      },
      {
        groupHeader: "Mastery Lab 3",
        groupLinks: [
          {
            name: "2019T3 Sample Solutions",
            path: "/files/resources/examBank/MATH1031/MATH1031_Mastery_Labtest_3_Solutions_2019T3.pdf"
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
        groupHeader: "Lab Test 1",
        groupLinks: [
          {
            name: "2019T3 Sample Solutions",
            path: "/files/resources/examBank/MATH1081/MATH1081_Lab_Test_1_2019T3.pdf"
          }
        ]
      },
      {
        groupHeader: "Lab Test 2",
        groupLinks: [
          {
            name: "2019T3 Sample Solutions",
            path: "/files/resources/examBank/MATH1081/MATH1081_Lab_Test_2_2019T3.pdf"
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
        groupHeader: "Lab Test 1",
        groupLinks: [
          {
            name: "2019T3 Algebra Sample Solutions",
            path: "/files/resources/examBank/MATH1131_1141/MATH1131_1141_Lab_Test_1_Algebra_2019T3.pdf"
          },
          {
            name: "2019T3 Calculus Sample Solutions",
            path: "/files/resources/examBank/MATH1131_1141/MATH1131_1141_Lab_Test_1_Calculus_2019T3.pdf"
          }
        ]
      },
      {
        groupHeader: "Lab Test 2",
        groupLinks: [
          {
            name: "2019T3 Algebra Sample Solutions",
            path: "/files/resources/examBank/MATH1131_1141/MATH1131_1141_Lab_Test_2_Algebra_2019T3.pdf"
          },
          {
            name: "2019T3 Calculus Sample Solutions",
            path: "/files/resources/examBank/MATH1131_1141/MATH1131_1141_Lab_Test_2_Calculus_2019T3.pdf"
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
        groupHeader: "Lab Test 1",
        groupLinks: [
          {
            name: "2019T3 Algebra Sample Solutions",
            path: "/files/resources/examBank/MATH1231_1241/MATH1231_1241_Lab_Test_1_Algebra_2019T3.pdf"
          },
          {
            name: "2020T3 Calculus Sample Solutions",
            path: "/files/resources/examBank/MATH1231_1241/MATH1231_1241_Lab_Test_1_Calculus_2020T3.pdf"
          }
        ]
      },
      {
        groupHeader: "Lab Test 2",
        groupLinks: [
          {
            name: "2019T3 Algebra Sample Solutions",
            path: "/files/resources/examBank/MATH1231_1241/MATH1231_1241_Lab_Test_2_Algebra_2019T3.pdf"
          },
          {
            name: "2019T3 Calculus Sample Solutions",
            path: "/files/resources/examBank/MATH1231_1241/MATH1231_1241_Lab_Test_2_Calculus_2019T3.pdf"
          }
        ]
      }
    ]
  }
];

export const oldExamBankData: revisionTile[] = [
  {
    courseCode: "MATH1081",
    courseTitle: "Discrete Mathematics",
    revisionLinks: [
      {
        groupHeader: "Sample Solutions",
        groupLinks: [
          {
            name: "Test 1",
            path: "/files/resources/examBank/MATH1081/old/MATH1081_Test_1.pdf"
          },
          {
            name: "Test 2 (Semester 1)",
            path: "/files/resources/examBank/MATH1081/old/MATH1081_Test_2_S1.pdf"
          },
          {
            name: "Test 2 (Semester 2)",
            path: "/files/resources/examBank/MATH1081/old/MATH1081_Test_2_S2.pdf"
          },
          {
            name: "Test 3 (Semester 1)",
            path: "/files/resources/examBank/MATH1081/old/MATH1081_Test_3_S1.pdf"
          },
          {
            name: "Test 3 (Semester 2)",
            path: "/files/resources/examBank/MATH1081/old/MATH1081_Test_3_S2.pdf"
          },
          {
            name: "Test 4 (Semester 1)",
            path: "/files/resources/examBank/MATH1081/old/MATH1081_Test_4_S1.pdf"
          },
          {
            name: "Test 4 (Semester 2)",
            path: "/files/resources/examBank/MATH1081/old/MATH1081_Test_4_S2.pdf"
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
        groupHeader: "Sample Solutions",
        groupLinks: [
          {
            name: "Test 1 (Algebra)",
            path: "/files/resources/examBank/MATH1131_MATH1141/old/MATH1131_1141_Test_1_Algebra.pdf"
          },
          {
            name: "Test 1 (Calculus)",
            path: "/files/resources/examBank/MATH1131_MATH1141/old/MATH1131_1141_Test_1_Calculus.pdf"
          },
          {
            name: "Test 2 (Algebra)",
            path: "/files/resources/examBank/MATH1131_MATH1141/old/MATH1131_1141_Test_2_Algebra.pdf"
          },
          {
            name: "Test 2 (Calculus)",
            path: "/files/resources/examBank/MATH1131_MATH1141/old/MATH1131_1141_Test_2_Calculus.pdf"
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
        groupHeader: "Sample Solutions",
        groupLinks: [
          {
            name: "Test 1 (Algebra)",
            path: "/files/resources/examBank/MATH1231_1241/old/MATH1231_1241_Test_1_Algebra.pdf"
          },
          {
            name: "Test 1 (Calculus)",
            path: "/files/resources/examBank/MATH1231_1241/old/MATH1231_1241_Test_1_Calculus.pdf"
          },
          {
            name: "Test 2 (Algebra)",
            path: "/files/resources/examBank/MATH1231_1241/old/MATH1231_1241_Test_2_Algebra.pdf"
          },
          {
            name: "Test 2 (Calculus)",
            path: "/files/resources/examBank/MATH1231_1241/old/MATH1231_1241_Test_2_Calculus.pdf"
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
        groupHeader: "Sample Solutions",
        groupLinks: [
          {
            name: "Test 1 (Algebra)",
            path: "/files/resources/examBank/MATH1151/old/MATH1151_Test_1_Algebra.pdf"
          },
          {
            name: "Test 1 (Calculus)",
            path: "/files/resources/examBank/MATH1151/old/MATH1151_Test_1_Calculus.pdf"
          },
          {
            name: "Test 2 (Algebra)",
            path: "/files/resources/examBank/MATH1151/old/MATH1151_Test_2_Algebra.pdf"
          },
          {
            name: "Test 2 (Calculus)",
            path: "/files/resources/examBank/MATH1151/old/MATH1151_Test_2_Calculus.pdf"
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
        groupHeader: "Sample Solutions",
        groupLinks: [
          {
            name: "Quiz (Algebra)",
            path: "/files/resources/examBank/MATH1251/old/MATH1251_Quiz_Algebra.pdf"
          },
          {
            name: "Quiz (Calculus)",
            path: "/files/resources/examBank/MATH1251/old/MATH1251_Quiz_Calculus.pdf"
          },
          {
            name: "Test (Algebra)",
            path: "/files/resources/examBank/MATH1251/old/MATH1251_Test_Algebra.pdf"
          },
          {
            name: "Test (Calculus)",
            path: "/files/resources/examBank/MATH1251/old/MATH1251_Test_Calculus.pdf"
          }
        ]
      }
    ]
  },
  {
    courseCode: "MATH2621",
    courseTitle: "Higher Complex Analysis",
    revisionLinks: [
      {
        groupHeader: "Sample Solutions",
        groupLinks: [
          {
            name: "Homework Worked Solutions (2018)",
            path: "/files/resources/examBank/MATH2621/old/MATH2621_Worked_HW_Solutions_2018.pdf"
          }
        ]
      }
    ]
  }
];

export default examBankData;
