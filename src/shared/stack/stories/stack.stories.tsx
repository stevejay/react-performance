import React from "react";
import { Stack } from "src/shared/stack";

const Default = () => (
  <Stack spacing={{ xs: 2, md: 3 }}>
    <div style={{ backgroundColor: "papayawhip" }}>Content One</div>
    <div style={{ backgroundColor: "papayawhip" }}>Content Two</div>
    <div style={{ backgroundColor: "papayawhip" }}>Content Three</div>
    <div style={{ backgroundColor: "papayawhip" }}>Content Four</div>
  </Stack>
);

// eslint-disable-next-line import/no-default-export
export default {
  component: Stack,
  title: "Stack"
};

export { Default };
