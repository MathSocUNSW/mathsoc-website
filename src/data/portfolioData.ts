export interface Director {
  name: string;
  imagePath: string;
}

export type ExecutiveRole =
  | "President"
  | "Secretary & Vice President of Careers"
  | "Secretary"
  | "Treasurer"
  | "Vice President of Education"
  | "Vice President of Operations"
  | "Vice President of Activities"
  | "Vice President of Careers";
export interface Executive {
  role: ExecutiveRole;
  name: string;
  selfIntroduction: string;
  imagePath: string;
}
export interface PortfolioDetails {
  name:
    | "Academics"
    | "Education"
    | "Careers"
    | "Socials"
    | "Human Resources"
    | "IT"
    | "Marketing"
    | "Creative";
  directors: Director[];
  subcommittee?: string[];
}
