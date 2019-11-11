import React from "react";
import { Stack } from "src/shared/stack";

const Default = () => (
  <Stack verticalSpacing={3}>
    <div>Some Content</div>
    <div>Some Other Content</div>
  </Stack>
);

// eslint-disable-next-line import/no-default-export
export default {
  component: Stack,
  title: "Stack"
};

export { Default };
