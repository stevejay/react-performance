import React from "react";
// import { animated } from "react-spring";
import {
  Box,
  Button,
  Heading,
  MenuIcon,
  Modal,
  ModalBackdrop
} from "modules/shared";
import { Sidebar } from "./sidebar";

// import styled from "styled-components/macro";

// const Foo = styled(animated.div)`
//   width: 100px;
//   height: 100px;
//   background-color: red;
// `;

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
        aria-controls="main-sidebar"
      >
        <MenuIcon color="white" iconSize={5} label="Open navigation menu" />
      </Button>
      <ModalBackdrop isVisible={sidebarIsOpen} />
      <Modal isOpen={sidebarIsOpen} dismissable onClose={handleClose}>
        {style => (
          <>
            <Sidebar id="main-sidebar" style={style} />
            {/* <Foo id="main-sidebar" style={style} /> */}
          </>
        )}
        {/* {styleProps => <Sidebar id="main-sidebar" style={style} />} */}
      </Modal>
    </Box>
  );
};

export { Header };
