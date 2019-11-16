import React from "react";
import { Box } from "src/shared/box";
import { Stack } from "src/shared/stack";

const PageBox: React.FC = ({ children }) => (
  <Box m={{ xs: 3, sm: 5 }}>
    <Stack verticalSpacing={{ xs: 2, sm: 3 }}>{children}</Stack>
  </Box>
);

export { PageBox };
