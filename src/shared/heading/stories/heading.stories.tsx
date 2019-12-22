import React from "react";
import { Heading } from "src/shared/heading";
import { Stack } from "src/shared/stack";
import { Paragraph } from "src/shared/paragraph";

const LONG_HEADING_TEXT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod " +
  "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim " +
  "veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea " +
  "commodo consequat";

const SHORT_HEADING_TEXT = "Lorem ipsum dolor sit amet";

const PARAGRAPH_TEXT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod " +
  "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim " +
  "veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  " +
  "commodo consequat. Duis aute irure dolor in reprehenderit in voluptate " +
  "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat " +
  "cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id " +
  "est laborum.";

const MultiLineHeadings = () => (
  <Stack spacing={2}>
    <Heading>{LONG_HEADING_TEXT}</Heading>
    <Paragraph>{PARAGRAPH_TEXT}</Paragraph>
    <Heading as="h2">{LONG_HEADING_TEXT}</Heading>
    <Paragraph>{PARAGRAPH_TEXT}</Paragraph>
    <Heading as="h3">{LONG_HEADING_TEXT}</Heading>
    <Paragraph>{PARAGRAPH_TEXT}</Paragraph>
    <Heading as="h4">{LONG_HEADING_TEXT}</Heading>
    <Paragraph>{PARAGRAPH_TEXT}</Paragraph>
    <Heading as="h5">{LONG_HEADING_TEXT}</Heading>
    <Paragraph>{PARAGRAPH_TEXT}</Paragraph>
  </Stack>
);

const SingleLineHeadings = () => (
  <Stack spacing={2}>
    <Heading>{SHORT_HEADING_TEXT}</Heading>
    <Paragraph>{PARAGRAPH_TEXT}</Paragraph>
    <Heading as="h2">{SHORT_HEADING_TEXT}</Heading>
    <Paragraph>{PARAGRAPH_TEXT}</Paragraph>
    <Heading as="h3">{SHORT_HEADING_TEXT}</Heading>
    <Paragraph>{PARAGRAPH_TEXT}</Paragraph>
    <Heading as="h4">{SHORT_HEADING_TEXT}</Heading>
    <Paragraph>{PARAGRAPH_TEXT}</Paragraph>
    <Heading as="h5">{SHORT_HEADING_TEXT}</Heading>
    <Paragraph>{PARAGRAPH_TEXT}</Paragraph>
  </Stack>
);

// eslint-disable-next-line import/no-default-export
export default {
  component: Heading,
  title: "Heading"
};

export { MultiLineHeadings, SingleLineHeadings };
