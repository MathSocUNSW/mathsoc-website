export interface Contact {
  name: string;
  email: string;
  message: string;
  subject: string;
}

export type Severity = "error" | "success" | "info" | "warning" | undefined;

export type FormInput =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>;
