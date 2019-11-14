import React from "react";
import {
  Box,
  Heading,
  Page,
  Stack,
  useScrollToTop,
  useSkipLinkTarget
} from "src/shared";
import { AnimationDurationField } from "./animation-duration-field";
import { AnimationLibraryField } from "./animation-library-field";
import { PageWeightField } from "./page-weight-field";
import { ShouldDelayNavigationField } from "./should-delay-navigation-field";

type Props = {
  readonly title: Page["title"];
};

const HomePage: React.FC<Props> = ({ title }) => {
  useScrollToTop();

  const headingRef = React.useRef<HTMLHeadingElement>(null);
  useSkipLinkTarget("main-content", headingRef);

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
        <ShouldDelayNavigationField />
        <PageWeightField />
        <AnimationLibraryField />
        <AnimationDurationField />
      </Stack>
    </Box>
  );
};

export { HomePage };
