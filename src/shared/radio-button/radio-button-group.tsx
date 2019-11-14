import React from "react";
import useId from "@charlietango/use-id";
import { Heading } from "src/shared/heading";
import { Stack } from "src/shared/stack";

type Props = {
  readonly title: string;
  readonly groupName: string;
};

const RadioButtonGroupContext = React.createContext("");

const RadioButtonGroup: React.FC<Props> = ({ title, groupName, children }) => {
  const headingId = useId("radio-button-group-label");
  const groupNameId = useId(groupName) || "";

  return (
    <Stack
      verticalSpacing={{ xs: 2, md: 3 }}
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
