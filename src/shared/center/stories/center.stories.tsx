import React from "react";
import { Center } from "src/shared/center";
import { Box } from "src/shared/box";

const Default = () => (
  <Box backgroundColor="papayawhip" display="block">
    <Center px={1} maxWidth={200} centeredText>
      <Box display="block" backgroundColor="gray" color="white" p={2}>
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
