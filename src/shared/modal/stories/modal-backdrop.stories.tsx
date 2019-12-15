import React from "react";
import { Box } from "src/shared/box";
import { ModalBackdrop } from "src/shared/modal/modal-backdrop";

const Default = () => (
  <Box backgroundColor="papayawhip" padding={5}>
    <ModalBackdrop isOpen>
      <div>The Content</div>
    </ModalBackdrop>
  </Box>
);

// eslint-disable-next-line import/no-default-export
export default {
  component: ModalBackdrop,
  title: "ModalBackdrop"
};

export { Default };
