import React from "react";

const useRefsMap = () => {
  const refsMap = React.useRef({});

  const api = React.useRef({
    addRef: (id, ref) => {
      console.log(`Adding ref for ${id}`, ref);
      refsMap.current[id] = ref;
    },
    removeRef: (id, ref) => {
      console.log(`Trying to remove ref for ${id}`, ref);
      if (refsMap.current[id] && refsMap.current[id] === ref) {
        delete refsMap.current[id];
        console.log(`Removed ref ${id} from refsMap`);
      }
    },
    getRef: id => {
      console.log(`Getting ref for ${id}`, refsMap.current[id] || null);
      return refsMap.current[id] || null;
    }
  });

  return api.current;
};

export { useRefsMap };
