import React from "react";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "emotion-theming";
import { IdProvider } from "react-use-id-hook";
import { Box, SkipLinksProvider } from "src/shared";
import { Header } from "src/header";
import { PictureElementPage } from "src/modules/picture-element";
import { CompositingAnimationPage } from "src/modules/compositing-animation";
import { RefsExperimentsPage } from "src/modules/refs-experiments";
import { HomePage } from "src/modules/home";
import { AriaLivePage } from "src/modules/aria-live";
import { GlobalStyle } from "./global-style";
import { theme } from "./theme";

const PAGES = [
  { component: HomePage, path: "/", title: "Options" },
  {
    component: PictureElementPage,
    path: "/picture-element",
    title: "Picture Element"
  },
  {
    component: CompositingAnimationPage,
    path: "/compositing-animation",
    title: "Compositing Animation"
  },
  {
    component: RefsExperimentsPage,
    path: "/refs-experiments",
    title: "Refs Experiments"
  },
  {
    component: AriaLivePage,
    path: "/aria-live",
    title: "Aria Live Experiment"
  }
] as const;

const App = () => (
  <IdProvider>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <SkipLinksProvider>
          <Box minHeight="100vh" flexDirection="column">
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
        </SkipLinksProvider>
      </>
    </ThemeProvider>
  </IdProvider>
);

export { App };
