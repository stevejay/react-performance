import React from "react";
import { getColor, getShadow } from "@xstyled/system";
import { css } from "@emotion/core";
import { styled } from "src/shared";

type Props = Readonly<{
  id: string;
  allowFocusOnContentBox?: boolean;
  style?: React.CSSProperties;
  children: React.ReactNode;
}>;

const StyledWrap = styled.nav<Pick<Props, "allowFocusOnContentBox">>`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 80vw;
  max-width: 300px;
  color: ${getColor("white")};
  background-color: ${getColor("primary900")};
  box-shadow: ${getShadow("xxl")};

  ${props =>
    props.allowFocusOnContentBox &&
    css`
      outline: 0;
    `}
`;

export const ModalSidebarContent = React.forwardRef<HTMLDivElement, Props>(
  ({ id, allowFocusOnContentBox, children, ...props }: Props, ref) => (
    <StyledWrap
      ref={ref}
      id={id}
      aria-modal="true"
      tabIndex={allowFocusOnContentBox ? 0 : undefined}
      {...props}
    >
      {children}
    </StyledWrap>
  )
);
