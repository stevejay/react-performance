import React from "react";
import { Switcher } from "src/shared/switcher";
import { Box } from "src/shared/box";
import { Button } from "src/shared/button";

const ExampleButton: React.FC = ({ children }) => (
  <Button useCSSAnimation variant="primary" onClick={() => {}}>
    {children}
  </Button>
);

const Default = () => (
  <Box margin={2} display="flex" flexDirection="column">
    <Switcher spacing={3} threshold="600px">
      <ExampleButton>Button One</ExampleButton>
      <ExampleButton>Button Two</ExampleButton>
      <ExampleButton>Button Three</ExampleButton>
      <ExampleButton>Button Four Four Four Four</ExampleButton>
    </Switcher>
  </Box>
);

// eslint-disable-next-line import/no-default-export
export default {
  component: Switcher,
  title: "Switcher"
};

export { Default };
