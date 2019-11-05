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

const PictureElementPage = ({ title }) => {
  useScrollToTop();

  const headingRef = React.useRef();
  useSkipLinkTarget("main-content", headingRef);

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
            fontWeight="light"
            borderBottom="1px solid"
            borderColor="contrastCool500"
          >
            {title}
          </Heading>
          {[...Array(500).keys()].map(key => (
            <Paragraph key={key}>{lorem.generateParagraphs(1)}</Paragraph>
          ))}
        </Stack>
      </Box>
    </>
  );
};

export { PictureElementPage };
