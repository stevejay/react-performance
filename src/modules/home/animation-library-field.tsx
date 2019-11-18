import React from "react";
import { useStoreState } from "pullstate";
import { asEnum, RadioButton } from "src/shared";
import { AnimationStore, AnimationLibrary } from "src/state";

const getOptionLabel = (key: string) => {
  switch (key) {
    case AnimationLibrary.ReactSpring:
      return "react-spring";
    case AnimationLibrary.ReactTransitionGroup:
      return "react-transition-group";
    default:
      throw new Error(`unknown key '${key}'`);
  }
};

const AnimationLibraryField = () => {
  const animationLibrary = useStoreState(
    AnimationStore,
    s => s.animationLibrary
  );

  return (
    <RadioButton.Group title="Animation Library">
      {Object.keys(AnimationLibrary).map(key => (
        <RadioButton
          key={key}
          label={getOptionLabel(key)}
          value={key}
          selectedValue={animationLibrary}
          onChange={() =>
            AnimationStore.update(s => {
              s.animationLibrary = asEnum(AnimationLibrary, key);
            })
          }
        />
      ))}
    </RadioButton.Group>
  );
};

export { AnimationLibraryField };
