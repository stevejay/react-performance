import React from "react";
import { Box, Button, Heading, Icons, Modal } from "modules/shared";
import { Sidebar } from "./sidebar";

const DURATION_MS = 250;
const SIDEBAR_ID = "main-sidebar";

const Header = () => {
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
    >
      <Heading as="h2" fontSize={[3, 4]} fontWeight="light">
        React in Motion
      </Heading>
      <Button
        fontSize={4}
        onClick={() => setSidebarIsOpen(true)}
        aria-haspopup="menu"
        aria-expanded={sidebarIsOpen}
        aria-controls={SIDEBAR_ID}
        aria-label="Open site navigation menu"
      >
        <Icons.Menu color="white" size={5} />
      </Button>
      <Modal
        isOpen={sidebarIsOpen}
        onClose={handleClose}
        duration={DURATION_MS}
      >
        <Sidebar
          id={SIDEBAR_ID}
          isOpen={sidebarIsOpen}
          duration={DURATION_MS}
        />
      </Modal>
    </Box>
  );
};

export { Header };
