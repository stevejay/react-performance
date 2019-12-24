import React from "react";
import { Page, useScrollToTop } from "src/shared";
import { AnimationDurationField } from "./animation-duration-field";
import { AnimationLibraryField } from "./animation-library-field";
import { PageWeightField } from "./page-weight-field";
import { ShouldDelayNavigationField } from "./should-delay-navigation-field";

type Props = {
  title: string;
};

const HomePage: React.FC<Props> = ({ title }) => {
  useScrollToTop();

  return (
    <Page.Box>
      <Page.Header title={title} />
      <ShouldDelayNavigationField />
      <PageWeightField />
      <AnimationLibraryField />
      <AnimationDurationField />
    </Page.Box>
  );
};

export { HomePage };
