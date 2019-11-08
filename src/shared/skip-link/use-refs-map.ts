import React from "react";

type Ref = React.RefObject<HTMLElement>;

// A lookup of ID to component ref.
const useRefsMap = () => {
  const refsMap = React.useRef<Record<string, Ref>>({});

  const api = React.useMemo(
    () => ({
      addRef: (id: string, ref: Ref): void => {
        refsMap.current[id] = ref;
      },
      getRef: (id: string): Ref | null => refsMap.current[id] || null,
      removeRef: (id: string, ref: Ref): void => {
        if (refsMap.current[id] && refsMap.current[id] === ref) {
          delete refsMap.current[id];
        }
      }
    }),
    [refsMap]
  );

  return api;
};

export { useRefsMap };
