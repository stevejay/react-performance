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
        <Button isLoading={false} disabled useCSSAnimation>
          Button Three
        </Button>
        <Button useCSSAnimation onClick={noop}>
          <Icons.Menu color="white" size={4} mr="0.5em" />
          Button Five
        </Button>
        <Button useCSSAnimation variant="outline" size="medium" onClick={noop}>
          Button Six
          <Icons.ChevronDown color="black" size={4} ml="0.5em" mr="-0.5em" />
        </Button>
      </Switcher>
      <Cluster spacing={1}>
        <Button useCSSAnimation onClick={noop}>
          <Icons.Menu color="white" size={4} />
        </Button>
      </Cluster>
      <Cluster spacing={1}>
        <Button isLoading={false} useCSSAnimation size="small" onClick={noop}>
          Button One
        </Button>
        <Button isLoading useCSSAnimation size="small" onClick={noop}>
          Button Two
        </Button>
        <Button useCSSAnimation size="small" onClick={noop}>
          <Icons.Menu color="white" size={4} />
        </Button>
        <Button useCSSAnimation variant="outline" size="small" onClick={noop}>
          Button Four
          <Icons.ChevronDown color="black" size={3} ml="0.5em" />
        </Button>
        <Button useCSSAnimation variant="outline" size="small" onClick={noop}>
          <Icons.Menu color="black" size={4} />
        </Button>
      </Cluster>
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
      <Box backgroundColor="black" p={1}>
        <Cluster spacing={1}>
          <Button
            isLoading={false}
            variant="outlineInverted"
            useCSSAnimation
            size="small"
            onClick={noop}
          >
            Button One
          </Button>
          <Button
            isLoading
            variant="outlineInverted"
            useCSSAnimation
            size="small"
            onClick={noop}
          >
            Button Two
          </Button>
          <Button
            useCSSAnimation
            variant="outlineInverted"
            size="small"
            onClick={noop}
          >
            <Icons.Menu color="white" size={4} />
          </Button>
          <Button
            useCSSAnimation
            variant="outlineInverted"
            size="small"
            onClick={noop}
          >
            Button Four
            <Icons.ChevronDown color="white" size={3} ml="0.5em" />
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
