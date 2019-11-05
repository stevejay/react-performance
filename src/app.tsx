import React from "react";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Box, SkipLinkProvider } from "src/shared";
import { Header } from "src/header";
import { PictureElementPage } from "src/modules/picture-element";
import { CompositingAnimationPage } from "src/modules/compositing-animation";
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

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <SkipLinkProvider>
        <Box minHeight="100vh" display="flex" flexDirection="column">
          <Header pages={PAGES} />
          <Box as="main" flexGrow={1} flexDirection="column">
            <Switch>
              {PAGES.map(({ path, title, component: PageComponent }) => (
                <Route key={path} exact path={path}>
                  <PageComponent title={title} />
                </Route>
              ))}
            </Switch>
          </Box>
        </Box>
      </SkipLinkProvider>
    </>
  </ThemeProvider>
);

export { App };