import React from "react";
import { Box } from "src/shared/box";

const Default = () => (
  <>
    <Box
      p={{ xs: 2, sm: 5 }}
      zIndex="header"
      backgroundColor="primary900"
      color="primary100"
    >
      The Div Content
    </Box>
    <Box
      as="section"
      p={{ xs: 2, sm: 5 }}
      zIndex="header"
      backgroundColor="primary900"
      color="green"
    >
      The Section Content
    </Box>
  </>
);

// eslint-disable-next-line import/no-default-export
export default {
  component: Box,
  title: "Box"
};

export { Default };
