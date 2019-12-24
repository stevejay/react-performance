import React from "react";
import { th } from "@xstyled/system";
import FocusLock from "react-focus-lock";
// import composeRefs from "@seznam/compose-react-refs";
import { styled } from "src/shared/styled";
import { useAriaHidden } from "src/shared/use-aria-hidden";
import { useBodyScrollLock } from "src/shared/use-body-scroll-lock";
import { Portal, PortalImperativeFunctions } from "src/shared/portal";
import { useDocumentEventListener } from "src/shared/use-document-event-listener";
import { useMergedRefs } from "src/shared/use-merged-refs";

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
  padding: ${th.space(2)};
  margin: auto;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.5);
  outline: 0;
  z-index: ${th.zIndex("modalDialog")};
  -webkit-overflow-scrolling: touch;
`;

const ModalBackdrop: React.FC<Props> = ({ isOpen, ...props }) =>
  isOpen ? <ModalBackdropInner {...props} /> : null;

const ModalBackdropInner: React.FC<Omit<Props, "isOpen">> = ({
  onRequestClose,
  focusLockProps,
  children,
  ...props
}) => {
  const portalRef = React.useRef<PortalImperativeFunctions>(null);
  const backdropRef = React.useRef<HTMLDivElement>(null);
  const ariaHiddenRef = useAriaHidden<HTMLDivElement>();
  const bodyScrollRef = useBodyScrollLock<HTMLDivElement>();

  const mergedRefs = useMergedRefs<HTMLDivElement>(
    backdropRef,
    ariaHiddenRef,
    bodyScrollRef
  );

  const handleKeyDown = React.useCallback(
    event => {
      if (event.key === "Escape") {
        // Only close this modal if it is not hidden by useAriaHidden,
        // which means it must be the topmost modal.
        if (portalRef.current && !portalRef.current.isHidden()) {
          onRequestClose && onRequestClose();
        }
      }
    },
    [onRequestClose]
  );

  useDocumentEventListener("keydown", handleKeyDown);

  const handlePointerEvent = React.useCallback(
    (event: React.SyntheticEvent) => {
      // Prevents the parent modal closing if this is a nested modal:
      event.stopPropagation();
      const backdrop = backdropRef.current;

      // Prevent a click on the modal content from closing it:
      if (
        backdrop &&
        backdrop.children.length &&
        backdrop.children[0].contains(event.target as HTMLElement)
      ) {
        return;
      }

      onRequestClose && onRequestClose();
    },
    [onRequestClose]
  );

  // Assert that there is only a single child component:
  React.Children.only(children);

  return (
    <Portal ref={portalRef}>
      <FocusLock autoFocus returnFocus {...focusLockProps}>
        <StyledBackdrop
          ref={mergedRefs}
          //   ref={composeRefs(backdropRef, ariaHiddenRef, bodyScrollRef)}
          onTouchStart={onRequestClose ? handlePointerEvent : undefined}
          onClick={onRequestClose ? handlePointerEvent : undefined}
          {...props}
        >
          {children}
        </StyledBackdrop>
      </FocusLock>
    </Portal>
  );
};

export { ModalBackdrop };
