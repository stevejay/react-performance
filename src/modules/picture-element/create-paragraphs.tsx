import React from "react";
import { LoremIpsum } from "lorem-ipsum";
import { Paragraph } from "src/shared";

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

export { createParagraphs };
