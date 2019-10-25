import React from "react";
import { ThemeProvider } from "styled-components";
import { Box } from "modules/shared";
import { Header } from "modules/header";
import { GlobalStyle } from "./global-style";
import { theme } from "./theme";

const App = () => {
  const mainRef = React.createRef(null);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Box minHeight="100vh" display="flex" flexDirection="column">
          <Header mainRef={mainRef} />
          <Box as="main" ref={mainRef} flexGrow={1}>
            <a href="/hello">Hello</a>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export { App };
