import React from "react";
import { getColor, getShadow, getRadius, getSpace } from "@xstyled/system";
import { css } from "@emotion/core";
import { styled } from "src/shared";

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
  padding: ${getSpace(2)};
  margin: auto;
  background-color: ${getColor("white")};
  border-radius: ${getRadius(2)};
  box-shadow: ${getShadow("xl")};

  ${props =>
    props.allowFocusOnContentBox &&
    css`
      outline: 0;
    `}
`;

export const ModalContent = React.forwardRef<HTMLDivElement, Props>(
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
      // eslint-disable-next-line no-console
      console.error("One of ariaLabel or ariaLabelledby must be specified");
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
