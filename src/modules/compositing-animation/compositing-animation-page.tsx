import React from "react";
import global from "global";
import {
  blockDOMUpdates,
  Box,
  Button,
  Heading,
  Page,
  Paragraph,
  Stack,
  Switcher,
  useScrollToTop,
  useSkipLinkTarget
} from "src/shared";

type Props = {
  readonly title: Page["title"];
};

const CompositingAnimationPage: React.FC<Props> = ({ title }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  useScrollToTop();

  const headingRef = React.useRef<HTMLHeadingElement>(null);
  useSkipLinkTarget("main-content", headingRef);

  const handleClick = () => {
    setIsLoading(true);
    global.setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  };

  return (
    <Box m={{ xs: 3, sm: 5 }}>
      <Stack verticalSpacing={{ xs: 2, sm: 3 }}>
        <Heading
          ref={headingRef}
          pb={{ xs: 1, sm: 2 }}
          fontSize={{ xs: 4, sm: 5 }}
          fontWeight="light"
          borderBottom="1px solid"
          borderColor="contrastCool500"
        >
          {title}
        </Heading>
        <Paragraph>
          The first two buttons show a spinner for five seconds when clicked,
          but each animates the spinner in a different way. The second button
          will enter a synchronous (blocking) loop for two seconds when clicked.
        </Paragraph>
        <Switcher spacing="1rem" threshold="66ch">
          <Button
            isLoading={isLoading}
            useCSSAnimation
            variant="primary"
            py={1}
            px={2}
            onClick={handleClick}
          >
            CSS animation
          </Button>
          <Button
            isLoading={isLoading}
            useCSSAnimation={false}
            variant="primary"
            py={1}
            px={2}
            onClick={handleClick}
          >
            rAF animation
          </Button>
          <Button
            variant="primary"
            useCSSAnimation={false}
            py={1}
            px={2}
            onClick={() => blockDOMUpdates(2000)}
          >
            Freeze site for two seconds
          </Button>
        </Switcher>
      </Stack>
    </Box>
  );
};

export { CompositingAnimationPage };
