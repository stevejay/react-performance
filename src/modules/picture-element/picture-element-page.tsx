import React from "react";
import { LoremIpsum } from "lorem-ipsum";
import { useStoreState } from "pullstate";
import {
  Box,
  Heading,
  Page,
  Paragraph,
  Stack,
  useScrollToTop,
  useSkipLinkTarget
} from "src/shared";
import { AnimationStore, PageWeight } from "src/state";
import { HeroImage } from "./hero-image";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 8
  }
});

const createParagraphs = (maxParagraphs: number) => {
  const paragraphs: Array<JSX.Element> = [];

  for (let i = 0; i < maxParagraphs; ++i) {
    paragraphs.push(
      <Paragraph key={i}>{lorem.generateParagraphs(1)}</Paragraph>
    );
  }

  return paragraphs;
};

type Props = {
  readonly title: Page["title"];
};

const PictureElementPage: React.FC<Props> = ({ title }) => {
  useScrollToTop();

  const headingRef = React.useRef<HTMLHeadingElement>(null);
  useSkipLinkTarget("main-content", headingRef);

  const pageWeight = useStoreState(AnimationStore, s => s.pageWeight);
  const maxParagraphs = pageWeight === PageWeight.Heavy ? 500 : 1;

  return (
    <>
      <HeroImage
        landscapeImagePath={`${process.env.PUBLIC_URL}/images/light/desert-landscape`}
        portraitImagePath={`${process.env.PUBLIC_URL}/images/light/desert-portrait`}
        altText="Desert landscape"
      />
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
          {createParagraphs(maxParagraphs)}
        </Stack>
      </Box>
    </>
  );
};

export { PictureElementPage };
