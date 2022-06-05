export interface RevisionTile {
  courseCode: string;
  courseTitle: string;
  revisionLinks: Groups[];
}

export interface Groups {
  groupHeader: string;
  groupLinks: Links[];
}

export interface Links {
  name: string;
  path: string;
}