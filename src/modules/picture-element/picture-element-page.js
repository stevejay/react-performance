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
        // dominantColor="928584" // light is 928584, dark is 675e5d
        altText="Desert landscape"
      >
        <Box m={[2, 4]} position="absolute" top={0} left={0} right={0}>
          {/* <Heading
            color="white"
            pb={[1, 2]}
            fontSize={[4, 5]}
            fontWeight="light"
            borderBottom="1px solid"
            borderColor="contrastCool500"
          >
            {title}
          </Heading> */}
        </Box>
      </HeroImage>
      <Box m={[3, 5]}>
        <Stack spacing={[2, 3]}>
          <Heading
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
