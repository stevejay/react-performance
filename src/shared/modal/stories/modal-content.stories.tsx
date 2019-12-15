import React from "react";
import { Box } from "src/shared/box";
import { ModalContent } from "src/shared/modal/modal-content";

const Default = () => (
  <Box backgroundColor="papayawhip" padding={5}>
    <ModalContent ariaLabel="The aria label" allowFocusOnContentBox>
      <div>The Content</div>
    </ModalContent>
  </Box>
);

// eslint-disable-next-line import/no-default-export
export default {
  component: ModalContent,
  title: "ModalContent"
};

export { Default };
