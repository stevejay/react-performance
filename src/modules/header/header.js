import React from "react";
import { Box, Button, Heading, Icons, Modal, SkipLink } from "modules/shared";
import { Sidebar } from "./sidebar";

const SIDEBAR_ID = "main-sidebar";

const Header = ({ mainRef }) => {
  const [sidebarIsOpen, setSidebarIsOpen] = React.useState(false);
  const handleClose = () => setSidebarIsOpen(false);

  return (
    <Box
      as="header"
      color="white"
      bg="primary100"
      p={[1, 2]}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      boxShadow="md"
    >
      <SkipLink skipRef={mainRef}>Skip to main content</SkipLink>
      <Heading as="h2" fontSize={[3, 4]} fontWeight="light">
        React in Motion
      </Heading>
      <Button
        aria-haspopup="menu"
        aria-expanded={sidebarIsOpen}
        aria-controls={SIDEBAR_ID}
        aria-label="Open site navigation menu"
        onClick={() => setSidebarIsOpen(true)}
      >
        <Icons.Menu color="white" size={5} />
      </Button>
      <Modal isOpen={sidebarIsOpen} onClose={handleClose}>
        <Sidebar id={SIDEBAR_ID} isOpen={sidebarIsOpen} onClose={handleClose} />
      </Modal>
    </Box>
  );
};

export { Header };
