import React from "react";
import { Button } from "src/shared/button";
import { Box } from "src/shared/box";
import { Cluster } from "src/shared/cluster";
import { Icons } from "src/shared/icons";
import { Stack } from "src/shared/stack";

const Default = () => (
  <Box margin={2} display="flex" flexDirection="column">
    <Stack verticalSpacing={2}>
      <Button isLoading={false} useCSSAnimation onClick={() => {}}>
        Button One
      </Button>
      <Button isLoading useCSSAnimation onClick={() => {}}>
        Button Two
      </Button>
      <Button
        isLoading={false}
        disabled
        useCSSAnimation
        variant="primary"
        onClick={() => {}}
      >
        Button Three
      </Button>
      <Button useCSSAnimation variant="primary" onClick={() => {}}>
        <Icons.Menu color="white" size={4} mr="0.5em" />
        Button Five
      </Button>
      <Box backgroundColor="black" p={1}>
        <Cluster spacing={1}>
          <Button
            useCSSAnimation
            variant="outlineInverted"
            size="medium"
            onClick={() => {}}
          >
            Button Four
          </Button>
          <Button useCSSAnimation variant="outlineInverted" onClick={() => {}}>
            <Icons.Menu color="white" size={4} mr="0.5em" ml="-0.25em" />
            Button Six
          </Button>
          <Button
            useCSSAnimation
            variant="outlineInverted"
            size="icon"
            onClick={() => {}}
          >
            <Icons.Menu color="white" size={5} />
          </Button>
        </Cluster>
      </Box>
    </Stack>
  </Box>
);

// eslint-disable-next-line import/no-default-export
export default {
  component: Button,
  title: "Button"
};

export { Default };
