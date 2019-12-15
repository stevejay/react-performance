import React from "react";
import { getSpace, getZIndex } from "@xstyled/system";
import FocusLock from "react-focus-lock";
import { styled } from "src/shared/styled";
import { useAriaHidden } from "src/shared/use-aria-hidden";
import { useBodyScrollLock } from "src/shared/use-body-scroll-lock";
import { Portal } from "src/shared/portal";

type Props = Readonly<{
  isOpen: boolean;
  onRequestClose?: () => void;
  // Overrides for styling the modal backdrop box:
  style?: React.CSSProperties;
  focusLockProps?: React.ComponentProps<typeof FocusLock>;
  children: React.ReactElement;
}>;

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  padding: ${getSpace(2)};
  margin: auto;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.5);
  outline: 0;
  z-index: ${getZIndex("modalDialog")};
  -webkit-overflow-scrolling: touch;
`;

const ModalBackdrop: React.FC<Props> = ({ isOpen, ...props }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <ModalBackdropInner {...props} />
    </Portal>
  );
};

const ModalBackdropInner: React.FC<Omit<Props, "isOpen">> = ({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onRequestClose = () => {},
  focusLockProps,
  children,
  ...props
}) => {
  const backdropRef = React.useRef<HTMLDivElement>(null);

  useAriaHidden(backdropRef);
  useBodyScrollLock(backdropRef);

  const handleKeyDown = React.useCallback(
    event => {
      if (event.key === "Escape") {
        // Ensure that this Escape key down does not close the parent modal
        // if this is a nested modal:
        event.stopPropagation();
        onRequestClose();
      }
    },
    [onRequestClose]
  );

  const handlePointerEvent = (event: React.SyntheticEvent) => {
    // Also prevents the parent modal closing if this is a nested modal:
    event.stopPropagation();

    // Prevent a click on the modal content from closing it:
    if (
      backdropRef.current &&
      backdropRef.current.children[0].contains(event.target as HTMLElement)
    ) {
      return;
    }

    onRequestClose();
  };

  // Assert that there is only a single child component:
  React.Children.only(children);

  return (
    <FocusLock autoFocus returnFocus {...focusLockProps}>
      <StyledBackdrop
        ref={backdropRef}
        onTouchStart={handlePointerEvent}
        onClick={handlePointerEvent}
        onKeyDown={handleKeyDown}
        {...props}
      >
        {children}
      </StyledBackdrop>
    </FocusLock>
  );
};

export { ModalBackdrop };
