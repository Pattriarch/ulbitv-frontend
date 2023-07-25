import { ValidateProfileError } from "../../consts/consts";

import { getProfileValidateErrors } from "./getProfileValidateErrors";

import { type StateSchema } from "@/app/providers/StoreProvider";

describe("getProfileValidateErrors", () => {
  test("should return is loading state", () => {
    const validateErrors = [
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ];
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors,
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(
      validateErrors
    );
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
