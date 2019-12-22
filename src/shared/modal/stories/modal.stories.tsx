import React from "react";
import { Modal } from "src/shared/modal";

const Default = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = React.useCallback(() => setIsOpen(true), [setIsOpen]);
  const handleClose = React.useCallback(() => setIsOpen(false), [setIsOpen]);

  return (
    <>
      <button onClick={handleOpen}>Open modal</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleClose}
        ariaLabel="The aria label"
      >
        This is the modal content.
        <br />
        This is the modal content.
        <br />
        This is the modal content.
        <br />
        This is the modal content.
        <br />
        This is the modal content.
        <br />
        This is the modal content.
        <br />
        This is the modal content.
        <br />
        This is the modal content.
        <br />
        This is the modal content.
        <br />
        This is the modal content.
        <br />
        This is the modal content.
        <br />
        This is the modal content.
        <br />
        This is the modal content.
        <br />
        This is the modal content.
        <br />
        This is the modal content.
        <br />
        This is the modal content.
        <br />
        This is the modal content.
        <br />
        This is the modal content.
        <br />
        This is the modal content.
        <br />
        This is the modal content.
        <br />
        This is the modal content.
        <br />
        This is the modal content.
        <br />
        This is the modal content.
        <br />
        This is the modal content.
        <br />
        This is the modal content.
        <br />
        This is the modal content.
        <br />
        This is the modal content.
        <br />
        This is the modal content.
        <br />
        This is the modal content.
        <br />
        This is the modal content.
        <br />
        This is the modal content.
        <br />
        This is the modal content.
        <br />
        This is the modal content.
        <br />
        This is the modal content.
        <br />
        This is the modal content.
        <br />
        This is the modal content.
        <br />
        This is the modal content.
        <br />
        This is the modal content.
        <br />
        This is the modal content.
        <Default />
      </Modal>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default {
  component: Modal,
  title: "Modal"
};

export { Default };
