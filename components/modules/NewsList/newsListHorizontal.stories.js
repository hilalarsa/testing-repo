import NewsListHorizontal from "./NewsListHorizontal";

const Story = (args) => <NewsListHorizontal {...args} />;

// Here we export a variant of the default template without passing props
export const ListHorizontal = Story.bind({});
ListHorizontal.args = {
  imgSrc:
    "https://s3-ap-northeast-1.amazonaws.com/psh-ex-ftnikkei-3937bb4/images/2/1/8/0/23520812-2-eng-GB/Cropped-157381478320191115%20Singtel.jpg",
};

// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: "Components/News/List Horizontal",
  component: NewsListHorizontal,
  argTypes: {
    imgSrc: {
      type: {
        required: true,
      },
    },
  },
};
