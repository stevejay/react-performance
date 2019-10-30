import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Box } from "modules/shared";
import { Header } from "modules/header";
import { PictureElementPage } from "modules/picture-element";
import { CompositingAnimationPage } from "modules/compositing-animation";
import { GlobalStyle } from "./global-style";
import { theme } from "./theme";

const PAGES = [
  { path: "/", title: "Picture Element", component: PictureElementPage },
  {
    path: "/compositing-animation",
    title: "Compositing Animation",
    component: CompositingAnimationPage
  }
];

const App = () => {
  const mainRef = React.createRef(null);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Box minHeight="100vh" display="flex" flexDirection="column">
          <Header mainRef={mainRef} pages={PAGES} />
          <Box
            as="main"
            ref={mainRef}
            flexGrow={1}
            flexDirection="column"
            // Ensure that focus will be moved to correct relative
            // position in document:
            tabIndex="-1"
          >
            <Switch>
              {PAGES.map(page => {
                const PageComponent = page.component;
                return (
                  <Route key={page.path} exact={true} path={page.path}>
                    <PageComponent title={page.title} />
                  </Route>
                );
              })}
            </Switch>
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
};

export { App };
