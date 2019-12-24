import React from "react";
import { Cluster } from "src/shared/cluster";
import { Box } from "src/shared/box";
import { Button } from "src/shared/button";
import { Stack } from "src/shared/stack";

const ExampleButton: React.FC = ({ children }) => (
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  <Button useCSSAnimation onClick={() => {}}>
    {children}
  </Button>
);

const Default = () => (
  <Box backgroundColor="papayawhip" display="block" p={2}>
    <Stack spacing={2}>
      <Cluster spacing={2}>
        <ExampleButton>Button One</ExampleButton>
        <ExampleButton>Button Two</ExampleButton>
      </Cluster>
      <Cluster spacing={2} justifyContent="flex-end">
        <ExampleButton>Button Three</ExampleButton>
        <ExampleButton>Button Four</ExampleButton>
      </Cluster>
    </Stack>
  </Box>
);

// eslint-disable-next-line import/no-default-export
export default {
  component: Cluster,
  title: "Cluster"
};

export { Default };
