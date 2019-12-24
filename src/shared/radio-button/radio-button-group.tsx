import React from "react";
import { useId } from "react-use-id-hook";
import { Heading } from "src/shared/heading";
import { Stack } from "src/shared/stack";

type Props = {
  title: string;
};

const RadioButtonGroupContext = React.createContext("");

const RadioButtonGroup: React.FC<Props> = ({ title, children }) => {
  const headingId = useId();
  const groupNameId = useId();

  return (
    <Stack
      spacing={{ xs: 2, md: 3 }}
      role="radiogroup"
      aria-labelledby={headingId}
    >
      <Heading id={headingId} as="h3">
        {title}
      </Heading>
      <RadioButtonGroupContext.Provider value={groupNameId}>
        {children}
      </RadioButtonGroupContext.Provider>
    </Stack>
  );
};

export { RadioButtonGroup, RadioButtonGroupContext };
