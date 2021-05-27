import Accordion from "./Accordion";

const Story = (args) => <Accordion {...args} />;

// Here we export a variant of the default template without passing props
export const Accordion = Story.bind({});


Accordion.defaultProps = {
    headerText: "Header Text",
    children: "",
};

// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: "Components/Accordion/Accordion",
  component: Accordion,
  argTypes: {
    headerText: {
      type: {
        required: true,
      },
    },
    children: {
        type:{
            required: false
        }
    },
  },
};
