import React from "react";
import { Box } from "src/shared/box";

const Default = () => (
  <Box
    p={{ xs: "sm", sm: "xl" }}
    zIndex="header"
    backgroundColor="primary900"
    color="white"
  >
    Some content
  </Box>
);

// eslint-disable-next-line import/no-default-export
export default {
  component: Box,
  title: "Box"
};

export { Default };
