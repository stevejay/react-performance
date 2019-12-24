import React from "react";
import {
  Button,
  Checkbox,
  Cluster,
  Page,
  Paragraph,
  Stack,
  useScrollToTop
} from "src/shared";
import { ExampleContextProvider } from "./example-context";
import { ExampleContextConsumer } from "./example-context-consumer";

type Props = {
  title: string;
};

const RefsExperimentsPage: React.FC<Props> = ({ title }) => {
  useScrollToTop();

  const [counter, setCounter] = React.useState(0);
  const [useStableContextValue, setUseStableContextValue] = React.useState(
    false
  );

  return (
    <Page.Box>
      <Page.Header title={title} />
      <Stack spacing={2}>
        <Checkbox
          label="Use a stable context value"
          name="useStableContextValue"
          checked={useStableContextValue}
          onChange={() => setUseStableContextValue(state => !state)}
        />
        <Cluster spacing={2}>
          <Button
            useCSSAnimation
            onClick={() => setCounter(counter => counter + 1)}
          >
            Click to trigger a re-render
          </Button>
        </Cluster>
        <Paragraph>Click count: {counter}</Paragraph>
        <ExampleContextProvider useStableContextValue={useStableContextValue}>
          <ExampleContextConsumer />
        </ExampleContextProvider>
      </Stack>
    </Page.Box>
  );
};

export { RefsExperimentsPage };
