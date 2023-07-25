import { type Country } from "@/entities/Country";
import { type Currency } from "@/entities/Currency";

export interface Profile {
  id?: string;
  username?: string;
  age?: number;
  firstName?: string;
  lastName?: string;
  currency?: Currency;
  country?: Country;
  city?: string;
  avatar?: string;
}
