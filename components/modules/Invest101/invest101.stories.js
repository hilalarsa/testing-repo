import Invest101 from "./Invest101";

const Story = () => <Invest101 />;

// Here we export a variant of the default template without passing props
export const List = Story.bind({});

// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: "Components/Invest 101/List",
  component: Invest101,
};
