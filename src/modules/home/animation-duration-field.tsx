import React from "react";
import { useStoreState } from "pullstate";
import { asEnum, RadioButton } from "src/shared";
import { AnimationStore, AnimationDuration } from "src/state";

const AnimationDurationField = () => {
  const animationDuration = useStoreState(
    AnimationStore,
    s => s.animationDuration
  );

  return (
    <RadioButton.Group title="Animation Duration">
      {Object.keys(AnimationDuration).map(key => (
        <RadioButton
          key={key}
          label={key}
          value={key}
          selectedValue={animationDuration}
          onChange={() =>
            AnimationStore.update(s => {
              s.animationDuration = asEnum(AnimationDuration, key);
            })
          }
        />
      ))}
    </RadioButton.Group>
  );
};

export { AnimationDurationField };
