import React from "react";
import log from "loglevel";
import { th } from "@xstyled/system";
import { css } from "@emotion/core";
import { styled } from "src/shared/styled";

type Props = Readonly<{
  allowFocusOnContentBox?: boolean;
  ariaLabel?: string;
  ariaLabelledby?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}>;

const StyledWrap = styled.div<Pick<Props, "allowFocusOnContentBox">>`
  display: flex;
  flex-direction: column;
  padding: ${th.space(2)};
  margin: auto;
  background-color: ${th.color("white")};
  border-radius: ${th.radius(2)};
  box-shadow: ${th.shadow("xl")};

  ${props =>
    props.allowFocusOnContentBox &&
    css`
      outline: 0;
    `}
`;

const ModalContent = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      allowFocusOnContentBox,
      ariaLabel,
      ariaLabelledby,
      children,
      ...props
    }: Props,
    ref
  ) => {
    if (!ariaLabel && !ariaLabelledby) {
      log.error("ariaLabel or ariaLabelledby must be defined");
    }

    return (
      <StyledWrap
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledby}
        tabIndex={allowFocusOnContentBox ? 0 : undefined}
        {...props}
      >
        {children}
      </StyledWrap>
    );
  }
);

export { ModalContent };
