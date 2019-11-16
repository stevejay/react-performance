import React from "react";

type Ref = React.RefObject<HTMLElement>;

type RefsMapValue = {
  map: Record<string, Ref>;
  api: {
    addRef(id: string, ref: Ref): void;
    getRef(id: string): Ref | null;
    removeRef(id: string, ref: Ref): void;
  };
};

// A lookup of ID to component ref.
const useRefsMap = () => {
  const refsMapValue = React.useRef<RefsMapValue>();

  if (!refsMapValue.current) {
    const value = {
      map: {} as Record<string, Ref>,
      api: {
        addRef: (id: string, ref: Ref): void => {
          value.map[id] = ref;
        },
        getRef: (id: string): Ref | null => value.map[id] || null,
        removeRef: (id: string, ref: Ref): void => {
          if (value.map[id] && value.map[id] === ref) {
            delete value.map[id];
          }
        }
      }
    };

    refsMapValue.current = value;
  }

  return refsMapValue.current.api;
};

export { useRefsMap };
