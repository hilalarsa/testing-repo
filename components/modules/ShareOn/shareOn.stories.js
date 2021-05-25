import ShareOn from "./ShareOn";

const Story = () => <ShareOn />;

// Here we export a variant of the default template without passing props
export const Base = Story.bind({});

// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: "Components/Share On/ Share On",
  component: ShareOn,
};
