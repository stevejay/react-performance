import React from "react";
import { Button } from "src/shared/button";
import { Box } from "src/shared/box";
import { Stack } from "src/shared/stack";

const Default = () => (
  <Box margin="sm" display="flex" flexDirection="column">
    <Stack verticalSpacing="sm">
      <Button
        isLoading={false}
        useCSSAnimation
        variant="primary"
        py="xs"
        px="sm"
        onClick={() => {}}
      >
        Button One
      </Button>
      <Button
        isLoading
        useCSSAnimation
        variant="primary"
        py="xs"
        px="sm"
        onClick={() => {}}
      >
        Button Two
      </Button>
      <Button
        isLoading={false}
        disabled
        useCSSAnimation
        variant="primary"
        py="xs"
        px="sm"
        onClick={() => {}}
      >
        Button Three
      </Button>
    </Stack>
  </Box>
);

// eslint-disable-next-line import/no-default-export
export default {
  component: Button,
  title: "Button"
};

export { Default };
