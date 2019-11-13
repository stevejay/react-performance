import React from "react";
import { Cluster } from "src/shared/cluster";
import { Box } from "src/shared/box";
import { Button } from "src/shared/button";

const ExampleButton: React.FC = ({ children }) => (
  <Button useCSSAnimation variant="primary" py={1} px={2} onClick={() => {}}>
    {children}
  </Button>
);

const Default = () => (
  <Box backgroundColor="papayawhip" display="block" p={3}>
    <Cluster spacing={2} justifyContent="right">
      <ExampleButton>Button One</ExampleButton>
      <ExampleButton>Button Two</ExampleButton>
    </Cluster>
  </Box>
);

// eslint-disable-next-line import/no-default-export
export default {
  component: Cluster,
  title: "Cluster"
};

export { Default };
