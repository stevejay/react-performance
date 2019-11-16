import React from "react";
import { readableColor } from "polished";
import { Box, Paragraph, getRandomColor } from "src/shared";
import { ExampleContext } from "./example-context";

const ExampleContextConsumer = React.memo(() => {
  React.useContext(ExampleContext);
  const color = getRandomColor();

  return (
    <Box p={1} color={readableColor(color)} backgroundColor={color}>
      <Paragraph>Hello you</Paragraph>
    </Box>
  );
});

export { ExampleContextConsumer };
