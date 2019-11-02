import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { Box, SkipLinkProvider, useTheme } from "modules/shared";
import { Header } from "modules/header";
import { PictureElementPage } from "modules/picture-element";
import { CompositingAnimationPage } from "modules/compositing-animation";
import { GlobalStyle } from "./global-style";

const PAGES = [
  { path: "/", title: "Picture Element", component: PictureElementPage },
  {
    path: "/compositing-animation",
    title: "Compositing Animation",
    component: CompositingAnimationPage
  }
];

const App = () => {
  const location = useLocation();
  //   const [delayedLocation, setDelayedLocation] = React.useState(location);
  //   const duration = useTheme().timings.modalAnimation;

  //   React.useEffect(() => {
  //     const timeoutID = setTimeout(
  //       () => setDelayedLocation(location),
  //       duration + 1
  //     );
  //     return () => clearTimeout(timeoutID);
  //   }, [location, duration]);

  return (
    <>
      <GlobalStyle />
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <SkipLinkProvider>
          <Header pages={PAGES} />
          <Box as="main" flexGrow={1} flexDirection="column">
            <Switch location={location}>
              {PAGES.map(({ path, title, component: Component }) => (
                <Route key={path} exact={true} path={path}>
                  <Component title={title} />
                </Route>
              ))}
            </Switch>
          </Box>
        </SkipLinkProvider>
      </Box>
    </>
  );
};

export { App };
