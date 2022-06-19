import { ComponentStory, ComponentMeta } from "@storybook/react";
import Login from "../components/Login/Login";
import { Provider } from "react-redux";
import { store } from "../redux/Store/Store";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Login",
  component: Login,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as ComponentMeta<typeof Login>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Login> = (args) => (
  <Router>
    <Login {...args} />
  </Router>
);

export const Black = Template.bind({});

Black.args = {
  bgcolor: "#000000",
};
export const Red = Template.bind({});

Red.args = {
  bgcolor: "red",
};
