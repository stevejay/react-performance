import React from "react";
import { useLocation } from "react-router-dom";
import window from "global/window";

const useScrollToTop = () => {
  const location = useLocation();
  React.useEffect(() => window.scrollTo(0, 0), [location.pathname]);
};

export { useScrollToTop };
