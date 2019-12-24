import React from "react";
import {
  Box,
  Page,
  Paragraph,
  useScrollToTop,
  Button,
  Checkbox,
  Cluster
} from "src/shared";

const LIVE_TEXT = [
  "This is the version one text.",
  "This is the version two text.",
  "This is the version three text."
] as const;

type Props = {
  title: string;
};

const AriaLivePage: React.FC<Props> = ({ title }) => {
  useScrollToTop();

  const [liveTextIndex, setLiveTextIndex] = React.useState(0);
  const handleClick = () =>
    setLiveTextIndex(index => (index + 1 >= LIVE_TEXT.length ? 0 : index + 1));

  const ariaLiveRegionRef = React.useRef<HTMLDivElement>(null);

  const [ariaAtomic, setAriaAtomic] = React.useState(false);

  return (
    <Page.Box>
      <Page.Header title={title} />
      <Cluster spacing={2}>
        <Button useCSSAnimation onClick={handleClick}>
          Change live text
        </Button>
        <Checkbox
          label="Use aria-atomic"
          name="ariaAtomic"
          checked={ariaAtomic}
          onChange={() => setAriaAtomic(value => !value)}
        />
      </Cluster>
      <Box
        ref={ariaLiveRegionRef}
        aria-live="polite"
        aria-atomic={ariaAtomic}
        backgroundColor="papayawhip"
        flexDirection="column"
        p={2}
        borderRadius="sm"
        boxShadow="md"
      >
        <Paragraph>This is the stable text.</Paragraph>
        <Paragraph>{LIVE_TEXT[liveTextIndex]}</Paragraph>
      </Box>
    </Page.Box>
  );
};

export { AriaLivePage };
