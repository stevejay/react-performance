import React from "react";
import { TransitionModal } from "src/shared/modal/transition-modal";

const Default = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = React.useCallback(() => setIsOpen(true), [setIsOpen]);
  const handleClose = React.useCallback(() => setIsOpen(false), [setIsOpen]);

  return (
    <>
      <button onClick={handleOpen}>Open modal</button>
      <TransitionModal
        isOpen={isOpen}
        onRequestClose={handleClose}
        allowFocusOnContentBox
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
      </TransitionModal>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default {
  component: TransitionModal,
  title: "TransitionModal"
};

export { Default };
