import React from "react";

// This is a simple implementation of a merged refs hook.
// It is best used for simple merging, i.e., when the refs
// passed in do not change. For a more complex merge,
// use @seznam/compose-react-refs.

const useMergedRefs = <T>(
  ...refs: React.Ref<T>[]
): ((instance: T | null) => void) => {
  const mergedRef = React.useCallback((value: T | null) => {
    refs.forEach(ref => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (ref as React.MutableRefObject<any>).current = value;
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);

  return mergedRef;
};

export { useMergedRefs };
