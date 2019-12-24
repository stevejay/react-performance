import React from "react";

const ExampleContext = React.createContext({ someProperty: "" });

type Props = {
  useStableContextValue: boolean;
};

const ExampleContextProvider: React.FC<Props> = ({
  useStableContextValue,
  children
}) => {
  const stableValue = React.useRef({ someProperty: "value" });

  return (
    <ExampleContext.Provider
      value={
        useStableContextValue ? stableValue.current : { someProperty: "value" }
      }
    >
      {children}
    </ExampleContext.Provider>
  );
};

export { ExampleContext, ExampleContextProvider };
