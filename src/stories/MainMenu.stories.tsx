import { ComponentStory, ComponentMeta } from "@storybook/react";
import MainMenu from "../components/Homepage/MainMenu/MainMenu";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Main Menu",
  component: MainMenu,
} as ComponentMeta<typeof MainMenu>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof MainMenu> = (args) => <MainMenu {...args} />;

export const Black = Template.bind({});

Black.args = {
  color: "#000000"
};

export const Red = Template.bind({});

Red.args = {
  color: "#FF0000"
};