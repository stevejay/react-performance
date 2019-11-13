import React from "react";
import { Center } from "src/shared/center";
import { Box } from "src/shared/box";

const Default = () => (
  <Box backgroundColor="papayawhip" display="block">
    <Center px="xs" maxWidth="200px" centeredText>
      <Box display="block" backgroundColor="gray" color="white" p="sm">
        Some Content
      </Box>
    </Center>
  </Box>
);

// eslint-disable-next-line import/no-default-export
export default {
  component: Center,
  title: "Center"
};

export { Default };
