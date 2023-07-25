import { getProfileReadonly } from "./getProfileReadonly";

import { type StateSchema } from "@/app/providers/StoreProvider";

describe("getProfileReadonly", () => {
  test("should return is loading state", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
      },
    };
    expect(getProfileReadonly(state as StateSchema)).toEqual(true);
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
  });
});
