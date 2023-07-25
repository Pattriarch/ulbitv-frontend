// eslint-disable-next-line ulbitv-fsd/layer-imports-validator
import "@/app/styles/index.scss";
import { type StoryFn } from "@storybook/react";

export const StyleDecorator = (Story: StoryFn): JSX.Element => <Story />;
