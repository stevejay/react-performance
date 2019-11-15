import React from "react";
import { useStoreState } from "pullstate";
import { Checkbox } from "src/shared";
import { AnimationStore } from "src/state";

const ShouldDelayNavigationField = () => {
  const shouldDelayNavigation = useStoreState(
    AnimationStore,
    s => s.shouldDelayNavigation
  );

  return (
    <Checkbox
      label="Delay URL change until after animations"
      name="shouldDelayNavigation"
      checked={shouldDelayNavigation}
      onChange={() =>
        AnimationStore.update(s => {
          s.shouldDelayNavigation = !shouldDelayNavigation;
        })
      }
    />
  );
};

export { ShouldDelayNavigationField };
