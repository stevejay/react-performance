import React from "react";
import { Box } from "src/shared/box";
import { Select } from "src/shared/select";
import { Stack } from "src/shared/stack";

const ITEMS = [
  "Foo",
  "Bar a very long option that will require an ellipsis to display it",
  "Bat"
];

const Default = () => {
  const [selectedItem, setSelectedItem] = React.useState(ITEMS[0]);

  return (
    <Box margin={2}>
      <Stack spacing={2}>
        <Select
          items={ITEMS}
          selectedItem={selectedItem}
          onSelectedItemChange={({ selectedItem }) =>
            setSelectedItem(selectedItem || "")
          }
        />
        <Select
          items={ITEMS}
          selectedItem={selectedItem}
          size="small"
          onSelectedItemChange={({ selectedItem }) =>
            setSelectedItem(selectedItem || "")
          }
        />
      </Stack>
    </Box>
  );
};

// eslint-disable-next-line import/no-default-export
export default {
  title: "Select"
};

export { Default };
