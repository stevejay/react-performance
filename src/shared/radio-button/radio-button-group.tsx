import React from "react";
import { Heading } from "src/shared/heading";
import { Stack } from "src/shared/stack";

type Props = {
  readonly title: string;
};

const RadioButtonGroup: React.FC<Props> = ({ title, children }) => (
  <Stack spacing={[1, 2]} role="radiogroup" aria-labelledby={title}>
    <Heading id={title} as="h3">
      {title}
    </Heading>
    {children}
  </Stack>
);

export { RadioButtonGroup };
