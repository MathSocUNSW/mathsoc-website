export interface Director {
  name: string;
  imagePath: string;
}

export type ExecutiveRole =
  | "President"
  | "Vice President"
  | "Secretary"
  | "Treasurer"
  | "Arc Delegate";
export interface Executive {
  role: ExecutiveRole;
  name: string;
  selfIntroduction: string;
  imagePath: string;
}
export interface PortfolioDetails {
  name:
    | "Education"
    | "Events (Corporate)"
    | "Events (Social)"
    | "Human Resources"
    | "IT"
    | "Marketing"
    | "Sponsorships";
  directors: Director[];
  subcommittee?: string[];
}
