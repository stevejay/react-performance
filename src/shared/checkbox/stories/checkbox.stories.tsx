import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Checkbox } from "src/shared/checkbox";
import { Box } from "src/shared/box";
import { Stack } from "src/shared/stack";

const Default = () => {
  const [selectedOne, setSelectedOne] = React.useState(false);
  const [selectedTwo, setSelectedTwo] = React.useState(false);
  const [selectedThree, setSelectedThree] = React.useState(true);
  const [selectedFour, setSelectedFour] = React.useState(true);

  return (
    <Box margin="sm" display="flex" flexDirection="column">
      <Stack verticalSpacing="sm">
        <Checkbox
          label="Option 1"
          name="optionOne"
          checked={selectedOne}
          onChange={() => setSelectedOne(selected => !selected)}
        />
        <Checkbox
          label="Option 2 - this option is disabled and does not wrap, just like the other options that don't wrap, but it's specifically call it out here for reasons."
          name="optionTwo"
          checked={selectedTwo}
          onChange={() => setSelectedTwo(selected => !selected)}
          disabled
        />
        <Checkbox
          label="Option 3"
          name="optionThree"
          checked={selectedThree}
          onChange={() => setSelectedThree(selected => !selected)}
        />
        <Checkbox
          label="Option 4"
          name="optionThree"
          checked={selectedFour}
          onChange={() => setSelectedFour(selected => !selected)}
          disabled
        />
      </Stack>
    </Box>
  );
};

// eslint-disable-next-line import/no-default-export
export default {
  component: Checkbox,
  title: "Checkbox",
  decorators: [withKnobs]
};

export { Default };
