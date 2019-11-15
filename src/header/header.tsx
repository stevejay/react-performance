import React from "react";
import { useLocation } from "react-router-dom";
import { useStoreState } from "pullstate";
import {
  Box,
  Button,
  Heading,
  Icons,
  SpringModal,
  SpringModalBackdrop,
  TransitionModal,
  TransitionModalBackdrop,
  SkipLink
} from "src/shared";
import { TransitionStatus } from "react-transition-group/Transition";
import {
  AnimationStore,
  AnimationLibrary,
  selectAnimationDurationMs
} from "src/state";
import { TransitionSidebar } from "./transition-sidebar";
import { SpringSidebar } from "./spring-sidebar";
import { NavLinkList } from "./nav-link-list";

const SIDEBAR_ID = "main-sidebar";

type Props = {
  readonly pages: readonly {
    readonly path: string;
    readonly title: string;
  }[];
};

const Header: React.FC<Props> = ({ pages }) => {
  const [sidebarIsOpen, setSidebarIsOpen] = React.useState(false);
  const handleClose = React.useCallback(() => setSidebarIsOpen(false), []);

  // Ensure sidebar closes if user uses browser back/forward buttons:
  const location = useLocation();
  React.useEffect(handleClose, [location]);

  const duration = useStoreState(AnimationStore, s =>
    selectAnimationDurationMs(s)
  );

  const animationLibrary = useStoreState(
    AnimationStore,
    s => s.animationLibrary
  );

  return (
    <Box
      as="header"
      color="white"
      backgroundColor="primary900"
      p={{ xs: 1, sm: 2 }}
      justifyContent="space-between"
      alignItems="center"
      boxShadow="md"
      zIndex="header"
    >
      <SkipLink targetId="main-content">Skip to main content</SkipLink>
      <Heading as="h2" fontSize={{ xs: 3, sm: 4 }} fontWeight="light">
        React Experiments
      </Heading>
      <Button
        useCSSAnimation
        variant="outlineInverted"
        px="0.25em"
        aria-haspopup="menu"
        aria-expanded={sidebarIsOpen}
        aria-controls={SIDEBAR_ID}
        aria-label="Open site navigation menu"
        onClick={() => setSidebarIsOpen(true)}
      >
        <Icons.Menu color="white" size={5} />
      </Button>
      {animationLibrary === AnimationLibrary.ReactTransitionGroup && (
        <>
          <TransitionModalBackdrop isOpen={sidebarIsOpen} duration={duration} />
          <TransitionModal
            isOpen={sidebarIsOpen}
            onClose={handleClose}
            duration={duration}
          >
            {(animationState: TransitionStatus) => (
              <TransitionSidebar
                animationState={animationState}
                id={SIDEBAR_ID}
                duration={duration}
              >
                <NavLinkList pages={pages} onClick={handleClose}></NavLinkList>
              </TransitionSidebar>
            )}
          </TransitionModal>
        </>
      )}
      {animationLibrary === AnimationLibrary.ReactSpring && (
        <>
          <SpringModalBackdrop isOpen={sidebarIsOpen} duration={duration} />
          <SpringModal
            isOpen={sidebarIsOpen}
            onClose={handleClose}
            duration={duration}
          >
            {(animationState: boolean) => (
              <SpringSidebar
                animationState={animationState}
                id={SIDEBAR_ID}
                duration={duration}
              >
                <NavLinkList pages={pages} onClick={handleClose}></NavLinkList>
              </SpringSidebar>
            )}
          </SpringModal>
        </>
      )}
    </Box>
  );
};

export { Header };
