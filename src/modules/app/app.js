import React from "react";
import { ThemeProvider } from "styled-components";
import { Router } from "@reach/router";
import { Box } from "modules/shared";
import { Header } from "modules/header";
import { GlobalStyle } from "./global-style";
import { theme } from "./theme";

// TODO temporary component - remove some time
const Page = ({ title }) => (
  <div>
    <h1>{title}</h1>
  </div>
);

const App = () => {
  const mainRef = React.createRef(null);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <Header mainRef={mainRef} />
        <Box as="main" ref={mainRef} flexGrow={1}>
          <Router>
            <Page path="/" title="Home" />
            <Page
              path="transform-opacity-animations"
              title="Transform &amp; Opacity Animations"
            />
            <Page path="bar-chart" title="Bar Chart" />
          </Router>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export { App };
