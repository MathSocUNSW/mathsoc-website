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
  //NEXT TILE
  {
    courseCode: "MATH1031",
    courseTitle: "Mathematics for Life Sciences (Labs)",

    revisionLinks: [
      {
        groupHeader: "",
        groupLinks: [
          {
            name: "Mastery Lab 1 Sample Solutions",
            path: ""
          },
          {
            name: "Mastery Lab 2 Sample Solutions",
            path: ""
          },
          {
            name: "Mastery Lab 3 Sample Solutions",
            path: ""
          }
        ]
      }
    ]
  },
  //NEXT TILE
  {
    courseCode: "MATH1081",
    courseTitle: "Discrete Mathematics (Labs)",
    revisionLinks: [
      {
        groupHeader: "",
        groupLinks: [
          {
            name: "Lab Test 1 Sample Solutions",
            path: ""
          },
          {
            name: "Lab Test 2 Sample Solutions",
            path: ""
          }
        ]
      }
    ]
  },
  //NEXT TILE
  {
    courseCode: "MATH1131/MATH1141",
    courseTitle: "Mathematics 1A (Labs)",
    revisionLinks: [
      {
        groupHeader: "",
        groupLinks: [
          {
            name: "Lab Test 1 - Algebra Sample Solutions",
            path: ""
          },
          {
            name: "Lab Test 2 - Algebra Sample Solutions",
            path: ""
          },
          {
            name: "Lab Test 1 - Calculus Sample Solutions",
            path: ""
          },
          {
            name: "Lab Test 2 - Calculus Sample Solutions",
            path: ""
          }
        ]
      }
    ]
  },
  //NEXT TILE
  {
    courseCode: "MATH1231/MATH1241",
    courseTitle: "Mathematics 1A (Labs)",
    revisionLinks: [
      {
        groupHeader: "",
        groupLinks: [
          {
            name: "Lab Test 1 - Algebra Sample Solutions",
            path: ""
          },
          {
            name: "Lab Test 2 - Algebra Sample Solutions",
            path: ""
          },
          {
            name: "Lab Test 1 - Calculus Sample Solutions",
            path: ""
          },
          {
            name: "Lab Test 2 - Calculus Sample Solutions",
            path: ""
          }
        ]
      }
    ]
  }
];

export default examBankData;
