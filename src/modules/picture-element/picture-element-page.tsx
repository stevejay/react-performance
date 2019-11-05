import React from "react";
import { LoremIpsum } from "lorem-ipsum";
import {
  Box,
  Heading,
  Paragraph,
  Stack,
  useScrollToTop,
  useSkipLinkTarget
} from "src/shared";
import { HeroImage } from "./hero-image";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    min: 8,
    max: 8
  }
});

type Props = {
  readonly title: string;
};

const PictureElementPage: React.FC<Props> = ({ title }) => {
  useScrollToTop();

  const headingRef = React.useRef<HTMLHeadingElement>(null);
  useSkipLinkTarget("main-content", headingRef);

  const createParagraphs = () => {
    const paragraphs: Array<JSX.Element> = [];

    for (let i = 0; i < 500; ++i) {
      paragraphs.push(
        <Paragraph key={i}>{lorem.generateParagraphs(1)}</Paragraph>
      );
    }

    return paragraphs;
  };

  return (
    <>
      <HeroImage
        landscapeImagePath={`${process.env.PUBLIC_URL}/images/light/desert-landscape`}
        portraitImagePath={`${process.env.PUBLIC_URL}/images/light/desert-portrait`}
        altText="Desert landscape"
      />
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
          {createParagraphs()}
        </Stack>
      </Box>
    </>
  );
};

export { PictureElementPage };
