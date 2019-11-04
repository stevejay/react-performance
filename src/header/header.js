import React from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  Button,
  CSSTransitionModal,
  Heading,
  Icons,
  Modal,
  SkipLink
} from "shared";
import { Sidebar } from "./sidebar";
import { CSSTransitionSidebar } from "./css-transition-sidebar";

const SIDEBAR_ID = "main-sidebar";

const Header = ({ pages }) => {
  const [sidebarIsOpen, setSidebarIsOpen] = React.useState(false);
  const handleClose = React.useCallback(() => setSidebarIsOpen(false), []);

  // Ensure sidebar closes if user uses browser back/forward buttons:
  const location = useLocation();
  React.useEffect(() => setSidebarIsOpen(false), [location]);

  return (
    <Box
      as="header"
      color="white"
      bg="primary900"
      p={[1, 2]}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      boxShadow="md"
      zIndex="header"
    >
      <SkipLink targetId="main-content">Skip to main content</SkipLink>
      <Heading as="h2" fontSize={[3, 4]} fontWeight="light">
        React Experiments
      </Heading>
      <Button
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
      {true && (
        <CSSTransitionModal isOpen={sidebarIsOpen} onClose={handleClose}>
          {animationState => (
            <CSSTransitionSidebar
              id={SIDEBAR_ID}
              animationState={animationState}
              pages={pages}
              isOpen={sidebarIsOpen}
              onClose={handleClose}
            />
          )}
        </CSSTransitionModal>
      )}
      {false && (
        <Modal isOpen={sidebarIsOpen} onClose={handleClose}>
          <Sidebar
            role="dialog"
            id={SIDEBAR_ID}
            pages={pages}
            isOpen={sidebarIsOpen}
            onClose={handleClose}
          />
        </Modal>
      )}
    </Box>
  );
};

export { Header };
