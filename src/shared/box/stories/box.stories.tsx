import React from "react";
// import { action } from '@storybook/addon-actions';
import { Box } from "src/shared/box";

// eslint-disable-next-line import/no-default-export
export default {
  component: Box,
  title: "Box"
};

export const Default = () => (
  <Box p={{ xs: 2, sm: 5 }} zIndex={0}>
    Some content
  </Box>
);
