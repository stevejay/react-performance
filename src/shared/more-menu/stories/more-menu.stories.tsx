import React from "react";
import { Box } from "src/shared/box";
import { MoreMenu } from "src/shared/more-menu";
import { Cluster } from "src/shared/cluster";
import { Button } from "src/shared/button";
import { Stack } from "src/shared/stack";

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};
const ITEMS = ["Foo", "Bar", "Bat"];

const Default = () => (
  <Box backgroundColor="papayawhip" padding={5}>
    <Stack spacing={2}>
      <Cluster spacing={2}>
        <Button useCSSAnimation onClick={noop}>
          Some button
        </Button>
        <MoreMenu
          items={ITEMS}
          placement="left-start"
          onSelectedItemChange={noop}
        />
      </Cluster>
      <Cluster spacing={2}>
        <Button useCSSAnimation size="small" onClick={noop}>
          Some button
        </Button>
        <MoreMenu
          items={ITEMS}
          size="small"
          placement="right-start"
          onSelectedItemChange={noop}
        />
      </Cluster>
    </Stack>
  </Box>
);

// eslint-disable-next-line import/no-default-export
export default {
  component: MoreMenu,
  title: "MoreMenu"
};

export { Default };
