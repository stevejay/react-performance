import React from "react";

type Ref = React.RefObject<HTMLElement>;

// A lookup of ID to component ref.
const useRefsMap = () => {
  const refsMap = React.useRef<{ [key in string]: Ref }>({});

  const api = React.useMemo(
    () => ({
      addRef: (id: string, ref: Ref): void => {
        refsMap.current[id] = ref;
      },
      removeRef: (id: string, ref: Ref): void => {
        if (refsMap.current[id] && refsMap.current[id] === ref) {
          delete refsMap.current[id];
        }
      },
      getRef: (id: string): Ref | null => refsMap.current[id] || null
    }),
    [refsMap]
  );

  return api;
};

export { useRefsMap };
