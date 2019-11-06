import React from "react";
import global from "global";
import {
  Box,
  Button,
  Heading,
  Page,
  Paragraph,
  Stack,
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
    }, 3000);
  };

  return (
    <Box m={[3, 5]}>
      <Stack spacing={[2, 3]}>
        <Heading
          ref={headingRef}
          pb={[1, 2]}
          fontSize={[4, 5]}
          fontWeight="lighter"
          borderBottom="1px solid"
          borderColor="contrastCool500"
        >
          {title}
        </Heading>
        <Paragraph>
          The button below will show the loading state for three seconds when
          clicked.
        </Paragraph>
        <Box display="flex">
          <Button
            isLoading={isLoading}
            variant="primary"
            py={1}
            px={2}
            onClick={handleClick}
          >
            Perform some action
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export { CompositingAnimationPage };
