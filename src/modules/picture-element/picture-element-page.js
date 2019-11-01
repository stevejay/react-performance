import React from "react";
import { LoremIpsum } from "lorem-ipsum";
import { Box, Heading, Paragraph, Stack, useScrollToTop } from "modules/shared";
import { HeroImage } from "./hero-image";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    min: 8,
    max: 8
  }
});

const PictureElementPage = ({ title }) => {
  useScrollToTop();

  return (
    <>
      <HeroImage
        landscapeImagePath="/images/light/desert-landscape"
        portraitImagePath="/images/light/desert-portrait"
        altText="Desert landscape"
      />
      <Box m={[3, 5]}>
        <Stack spacing={[2, 3]}>
          <Heading
            isSkipLink={true}
            pb={[1, 2]}
            fontSize={[4, 5]}
            fontWeight="light"
            borderBottom="1px solid"
            borderColor="contrastCool500"
          >
            {title}
          </Heading>
          <Paragraph>{lorem.generateParagraphs(1)}</Paragraph>
        </Stack>
      </Box>
    </>
  );
};

export { PictureElementPage };
