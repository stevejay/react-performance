import React from "react";
import { Box, Page, Stack, useScrollToTop } from "src/shared";
import { SingleSelectExample } from "./single-select-example";

type Props = {
  readonly title: string;
};

const ReactSelectExperimentPage: React.FC<Props> = ({ title }) => {
  useScrollToTop();

  return (
    <Page.Box>
      <Page.Header title={title} />
      <Stack verticalSpacing={2}>
        <Box minHeight={189} />
        <SingleSelectExample />
      </Stack>
    </Page.Box>
  );
};

export { ReactSelectExperimentPage };
