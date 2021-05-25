import NewsListVertical from "./NewsListVertical";

const Story = () => <NewsListVertical />;

// Here we export a variant of the default template without passing props
export const ListVertical = Story.bind({});

// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: "Components/News/List Vertical",
  component: NewsListVertical,
};
