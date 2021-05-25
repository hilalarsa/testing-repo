import ButtonBorderless from "./ButtonBorderless";

const Story = (args) => <ButtonBorderless {...args} />;

// Here we export a variant of the default template without passing props
export const Borderless = Story.bind({});
Borderless.args = {
  type: "button",
  bgColor: "bg-turqoise-100",
  textColor: "text-turqoise",
  text: "View more articles",
};

// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: "Components/Button/Borderless",
  component: ButtonBorderless,
  argTypes: {
    text: {
      type: {
        required: true,
      },
    },
    type: {
      control: {
        type: "radio",
        options: ["button", "submit", "reset"],
      },
    },
  },
};
