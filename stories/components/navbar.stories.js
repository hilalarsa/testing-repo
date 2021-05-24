import Navbar from "../../components/modules/Navbar/Navbar.js";

const Story = () => <Navbar />;

// Here we export a variant of the default template without passing props
export const Base = Story.bind({});

// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: "Navbar",
  component: Navbar,
};
