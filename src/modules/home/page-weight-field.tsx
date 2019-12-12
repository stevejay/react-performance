import React from "react";
import { useStoreState } from "pullstate";
import { asEnum, RadioButton } from "src/shared";
import { AnimationStore, PageWeight } from "src/state";

const PageWeightField = () => {
  const pageWeight = useStoreState(AnimationStore, s => s.pageWeight);

  return (
    <RadioButton.Group title="Page Weight">
      {Object.keys(PageWeight).map(key => (
        <RadioButton
          key={key}
          label={key}
          value={key}
          selectedValue={pageWeight}
          onChange={() =>
            AnimationStore.update(s => {
              s.pageWeight = asEnum(PageWeight, key);
            })
          }
        />
      ))}
    </RadioButton.Group>
  );
};

export { PageWeightField };
