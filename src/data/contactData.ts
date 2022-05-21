export interface Contacts {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
  subject: string;
}

export type Severity = "error" | "success" | "info" | "warning" | undefined;
