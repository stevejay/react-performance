import React from "react";
import { Button } from "src/shared/button";
import { Box } from "src/shared/box";
import { Stack } from "src/shared/stack";

const Default = () => (
  <Box margin={2} display="flex" flexDirection="column">
    <Stack verticalSpacing={2}>
      <Button
        isLoading={false}
        useCSSAnimation
        variant="primary"
        py={1}
        px={2}
        onClick={() => {}}
      >
        Button One
      </Button>
      <Button
        isLoading
        useCSSAnimation
        variant="primary"
        py={1}
        px={2}
        onClick={() => {}}
      >
        Button Two
      </Button>
      <Button
        isLoading={false}
        disabled
        useCSSAnimation
        variant="primary"
        py={1}
        px={2}
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
