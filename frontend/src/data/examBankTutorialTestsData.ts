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
const examBankTutorialTestsData: revisionTile[] = [
  //NEXT TILE
  {
    courseCode: "MATH1081",
    courseTitle: "Discrete Mathematics (Labs)",
    revisionLinks: [
      {
        groupHeader: "",
        groupLinks: [
          {
            name: "Test 1 Solutions",
            path: ""
          },
          {
            name: "Test 2 Solutions",
            path: ""
          },
          {
            name: "Test 2 Solutions (Semester 2)",
            path: ""
          },
          {
            name: "Test 3 Solutions",
            path: ""
          },
          {
            name: "Test 3 Solutions (Semester 2)",
            path: ""
          },
          {
            name: "Test 4 Solutions",
            path: ""
          },
          {
            name: "Test 4 Solutions (Semester 2)",
            path: ""
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
            name: "Test 1 (Algebra)",
            path: ""
          },
          {
            name: "Test 1 (Calculus)",
            path: ""
          },
          {
            name: "Test 2 (Algebra)",
            path: ""
          },
          {
            name: "Test 2 (Calculus) 2009",
            path: ""
          },
          {
            name: "Test 2 (Calculus) (Version 2)",
            path: ""
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
            name: "Test 1 (Algebra)",
            path: ""
          },
          {
            name: "Test 1 (Calculus)",
            path: ""
          },
          {
            name: "Test 2 (Algebra)",
            path: ""
          },
          {
            name: "Test 2 (Calculus)",
            path: ""
          }
        ]
      }
    ]
  },
  //NEXT TILE
  {
    courseCode: "MATH1151",
    courseTitle: "Mathematics for Actuarial Studies and Finance 1A",
    revisionLinks: [
      {
        groupHeader: "",
        groupLinks: [
          {
            name: "Test 1 (Algebra)",
            path: ""
          },
          {
            name: "Test 1 (Calculus)",
            path: ""
          },
          {
            name: "Test 2 (Algebra)",
            path: ""
          },
          {
            name: "Test 2 (Calculus)",
            path: ""
          }
        ]
      }
    ]
  },
  //NEXT TILE
  {
    courseCode: "MATH1251",
    courseTitle: "Mathematics for Actuarial Studies and Finance 1B",
    revisionLinks: [
      {
        groupHeader: "",
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
            name: "Algebra - Course Pack Solutions",
            path: ""
          },
          {
            name: "Calculus - Course Pack Solutions",
            path: ""
          }
        ]
      }
    ]
  },
  //NEXT TILE
  {
    courseCode: "MATH2621",
    courseTitle: "Higher Complex Analysis",
    revisionLinks: [
      {
        groupHeader: "",
        groupLinks: [
          {
            name: "Homework Worked Solutions",
            path: ""
          }
        ]
      }
    ]
  }

];

export default examBankTutorialTestsData;
