import React from "react";
import { useStoreState } from "pullstate";
import { Box, Page, Stack, useScrollToTop } from "src/shared";
import { AnimationStore, PageWeight } from "src/state";
import { HeroImage } from "./hero-image";
import { createParagraphs } from "./create-paragraphs";

type Props = {
  readonly title: string;
};

const PictureElementPage: React.FC<Props> = ({ title }) => {
  useScrollToTop();

  const pageWeight = useStoreState(AnimationStore, s => s.pageWeight);
  const maxParagraphs = pageWeight === PageWeight.Heavy ? 500 : 1;

  return (
    <>
      <HeroImage
        landscapeImagePath={`${process.env.PUBLIC_URL}/images/light/desert-landscape`}
        portraitImagePath={`${process.env.PUBLIC_URL}/images/light/desert-portrait`}
        altText="Desert landscape"
      />
      <Box m={{ xs: 3, sm: 5 }}>
        <Stack verticalSpacing={{ xs: 2, sm: 3 }}>
          <Page.Header title={title} />
          {createParagraphs(maxParagraphs)}
        </Stack>
      </Box>
    </>
  );
};

export { PictureElementPage };
