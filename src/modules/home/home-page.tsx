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
    <Box m={{ xs: "md", sm: "xl" }}>
      <Stack verticalSpacing={{ xs: "sm", sm: "md" }}>
        <Heading
          ref={headingRef}
          pb={{ xs: "xs", sm: "sm" }}
          fontSize={{ xs: "xl", sm: "xxl" }}
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
