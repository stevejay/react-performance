import React from "react";
import { useLocation } from "react-router-dom";
import { useStoreState } from "pullstate";
import { Box, Button, Heading, Icons, SkipLink } from "src/shared";
import { AnimationStore, selectAnimationDurationMs } from "src/state";
import { ModalSidebar } from "./modal-sidebar";
import { NavLinkList } from "./nav-link-list";

const SIDEBAR_ID = "main-sidebar";

type Props = {
  pages: readonly {
    path: string;
    title: string;
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
        size="icon"
        aria-haspopup="menu"
        aria-expanded={sidebarIsOpen}
        aria-controls={SIDEBAR_ID}
        aria-label="Open site navigation menu"
        onClick={() => setSidebarIsOpen(true)}
      >
        <Icons.Menu color="white" size={5} />
      </Button>
      <ModalSidebar
        isOpen={sidebarIsOpen}
        onRequestClose={handleClose}
        id={SIDEBAR_ID}
        duration={duration}
      >
        <NavLinkList pages={pages} onClick={handleClose} />
      </ModalSidebar>
    </Box>
  );
};

export { Header };
