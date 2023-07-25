import type { Meta, StoryObj } from "@storybook/react";

import { Code } from "./Code";

const meta: Meta<typeof Code> = {
  title: "shared/Code",
  component: Code,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Normal: Story = {
  args: {
    text:
      "jest.mock('axios');\n" +
      "\n" +
      "const mockedAxios = jest.mocked(axios, true);\n" +
      "\n" +
      "export class TestAsyncThunk<Return, Arg, RejectedValue> {\n" +
      "    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;\n" +
      "\n" +
      "    dispatch: jest.MockedFn<any>;\n" +
      "\n" +
      "    getState: () => StateSchema;\n" +
      "\n" +
      "    api: jest.MockedFunctionDeep<AxiosStatic>;\n" +
      "    navigate: jest.MockedFn<any>;",
  },
};
