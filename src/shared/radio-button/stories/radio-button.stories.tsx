import React from "react";
import { IdProvider } from "react-use-id-hook";
import { withKnobs } from "@storybook/addon-knobs";
import { RadioButton } from "src/shared/radio-button";
import { Box } from "src/shared/box";

const Default = () => {
  const [selectedOption, setSelectedOption] = React.useState("");

  return (
    <IdProvider>
      <Box margin={2} display="flex" flexDirection="column">
        <RadioButton.Group title="The Options" groupName="options">
          <RadioButton
            label="Option 1"
            value="one"
            selectedValue={selectedOption}
            onChange={setSelectedOption}
          />
          <RadioButton
            label="Option 2 - this option is disabled and does not wrap, just like the other options that don't wrap, but it's specifically call it out here for reasons."
            value="two"
            selectedValue={selectedOption}
            onChange={setSelectedOption}
            disabled
          />
          <RadioButton
            label="Option 3"
            value="three"
            selectedValue={selectedOption}
            onChange={setSelectedOption}
          />
        </RadioButton.Group>
      </Box>
    </IdProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default {
  component: RadioButton,
  title: "RadioButton",
  decorators: [withKnobs]
};

export { Default };
