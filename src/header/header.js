import React from "react";
import { useLocation } from "react-router-dom";
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
import { TransitionSidebar } from "./transition-sidebar";
import { SpringSidebar } from "./spring-sidebar";
import { NavLink } from "./nav-link";
import { NavLinkList } from "./nav-link-list";

const SIDEBAR_ID = "main-sidebar";

const Header = ({ pages }) => {
  const [sidebarIsOpen, setSidebarIsOpen] = React.useState(false);
  const handleClose = React.useCallback(() => setSidebarIsOpen(false), []);

  // Ensure sidebar closes if user uses browser back/forward buttons:
  const location = useLocation();
  React.useEffect(handleClose, [location]);

  const transition = false;
  const Modal = transition ? TransitionModal : SpringModal;
  const Sidebar = transition ? TransitionSidebar : SpringSidebar;
  const ModalBackdrop = transition
    ? TransitionModalBackdrop
    : SpringModalBackdrop;

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
      <Heading as="h2" fontSize={[3, 4]} fontWeight="lighter">
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
      <ModalBackdrop isOpen={sidebarIsOpen} />
      <Modal isOpen={sidebarIsOpen} onClose={handleClose}>
        {animationState => (
          <Sidebar animationState={animationState} id={SIDEBAR_ID}>
            <NavLinkList>
              {pages.map(page => (
                <li key={page.path}>
                  <NavLink
                    to={page.path}
                    label={page.title}
                    onClick={handleClose}
                  />
                </li>
              ))}
            </NavLinkList>
          </Sidebar>
        )}
      </Modal>
    </Box>
  );
};

export { Header };
