import React from "react";
import { ThemeContext } from "styled-components";

const useTheme = () => React.useContext(ThemeContext);

export { useTheme };
