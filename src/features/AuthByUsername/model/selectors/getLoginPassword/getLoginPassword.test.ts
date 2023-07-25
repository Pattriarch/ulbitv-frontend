import { getLoginPassword } from "./getLoginPassword";

import { type StateSchema } from "@/app/providers/StoreProvider";

describe("getLoginPassword", () => {
  test("should return error", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: "test",
      },
    };
    expect(getLoginPassword(state as StateSchema)).toEqual("test");
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual("");
  });
});
