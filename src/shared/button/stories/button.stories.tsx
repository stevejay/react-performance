import React from "react";
import { Button } from "src/shared/button";
import { Box } from "src/shared/box";
import { Cluster } from "src/shared/cluster";
import { Icons } from "src/shared/icons";
import { Stack } from "src/shared/stack";
import { Switcher } from "src/shared/switcher";

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

const Default = () => (
  <Box margin={2} display="flex" flexDirection="column">
    <Stack spacing={2}>
      <Switcher spacing={2} threshold={650}>
        <Button isLoading={false} useCSSAnimation onClick={noop}>
          Button One
        </Button>
        <Button isLoading useCSSAnimation onClick={noop}>
          Button Two - CSS
        </Button>
        <Button isLoading={false} disabled useCSSAnimation variant="primary">
          Button Three
        </Button>
        <Button useCSSAnimation variant="primary" onClick={noop}>
          <Icons.Menu color="white" size={4} mr="0.5em" />
          Button Five
        </Button>
      </Switcher>
      <Box backgroundColor="black" p={1}>
        <Cluster spacing={1}>
          <Button
            useCSSAnimation
            variant="outlineInverted"
            size="medium"
            onClick={noop}
          >
            Button Four
          </Button>
          <Button useCSSAnimation variant="outlineInverted" onClick={noop}>
            <Icons.Menu color="white" size={4} mr="0.5em" ml="-0.25em" />
            Button Six
          </Button>
          <Button
            useCSSAnimation
            variant="outlineInverted"
            size="icon"
            onClick={noop}
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
