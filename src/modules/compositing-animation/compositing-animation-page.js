import React from "react";
import { Box, Stack, Heading, useScrollToTop } from "modules/shared";

const CompositingAnimationPage = ({ title }) => {
  useScrollToTop();

  return (
    <Box m={[3, 5]}>
      <Stack spacing={[2, 3]}>
        <Heading
          pb={[1, 2]}
          fontSize={[4, 5]}
          fontWeight="light"
          borderBottom="1px solid"
          borderColor="contrastCool500"
        >
          {title}
        </Heading>
      </Stack>
    </Box>
  );
};

export { CompositingAnimationPage };
