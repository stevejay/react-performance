import React from "react";

// A lookup of ID to component ref.
const useRefsMap = () => {
  const refsMap = React.useRef({});

  const api = React.useMemo(
    () => ({
      addRef: (id, ref) => {
        refsMap.current[id] = ref;
      },
      removeRef: (id, ref) => {
        if (refsMap.current[id] && refsMap.current[id] === ref) {
          delete refsMap.current[id];
        }
      },
      getRef: id => refsMap.current[id] || null
    }),
    [refsMap]
  );

  return api;
};

export { useRefsMap };
