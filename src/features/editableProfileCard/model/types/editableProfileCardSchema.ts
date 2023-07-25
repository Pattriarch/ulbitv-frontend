import { type ValidateProfileError } from "../../model/consts/consts";

import { type Profile } from "@/entities/Profile";

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  validateErrors?: ValidateProfileError[];
}
