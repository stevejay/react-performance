import React from "react";
import global from "global";
import {
  Box,
  Button,
  Heading,
  Paragraph,
  Stack,
  useScrollToTop,
  useSkipLinkTarget
} from "modules/shared";

const CompositingAnimationPage = ({ title }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  useScrollToTop();

  const headingRef = React.useRef();
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
          fontWeight="light"
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
