import React from "react";
import { ThemeProvider } from "styled-components";
import { Box } from "modules/shared";
import { Header } from "modules/header";
import { GlobalStyle } from "./global-style";
import { theme } from "./theme";

const App = () => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <Header />
        <Box as="main" flexGrow={1}>
          Hello
        </Box>
      </Box>
    </ThemeProvider>
  </>
);

export { App };
