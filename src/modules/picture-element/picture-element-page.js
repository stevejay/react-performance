import React from "react";
import { LoremIpsum } from "lorem-ipsum";
import { Box, Heading, Paragraph, useScrollToTop } from "modules/shared";
import { HeroImage } from "./hero-image";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    min: 8,
    max: 8
  }
});

const PictureElementPage = () => {
  useScrollToTop();

  return (
    <>
      <HeroImage
        landscapeImagePath="/images/desert-landscape"
        portraitImagePath="/images/desert-portrait"
        altText="Desert landscape"
      >
        <Box m={[2, 4]} position="absolute" top={0} left={0} right={0}>
          <Heading
            color="white"
            pb={[1, 2]}
            fontSize={[4, 5]}
            fontWeight="light"
            borderBottom="1px solid"
            borderColor="contrastCool500"
          >
            Picture Element
          </Heading>
        </Box>
      </HeroImage>
      <Box m={[3, 5]}>
        <Paragraph>{lorem.generateParagraphs(1)}</Paragraph>
      </Box>
    </>
  );
};

export { PictureElementPage };
