import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Box, Heading, useScrollToTop } from "modules/shared";
import { Header } from "modules/header";
import { PictureElementPage } from "modules/picture-element";
import { GlobalStyle } from "./global-style";
import { theme } from "./theme";

// TODO temporary component - remove sometime
const Page = ({ title }) => {
  useScrollToTop();

  return (
    <div>
      <Heading>{title}</Heading>
    </div>
  );
};

const App = () => {
  const mainRef = React.createRef(null);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Box minHeight="100vh" display="flex" flexDirection="column">
          <Header mainRef={mainRef} />
          <Box as="main" ref={mainRef} flexGrow={1}>
            <Switch>
              <Route exact path="/">
                <PictureElementPage />
              </Route>
              <Route path="/transform-opacity-animations">
                <Page title="Transform &amp; Opacity Animations" />
              </Route>
              <Route path="/bar-chart">
                <Page title="Bar Chart" />
              </Route>
            </Switch>
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
};

export { App };
