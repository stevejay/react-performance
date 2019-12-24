import React from "react";
import { ContentWrap } from "./content-wrap";
import { CSSAnimationLoader } from "./css-animation-loader";
import { SpringAnimationLoader } from "./spring-animation-loader";
import { StyledButton } from "./styled-button";

type ButtonProps = React.ComponentProps<typeof StyledButton> & {
  disabled?: boolean;
  isLoading?: boolean;
  useCSSAnimation: boolean;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  isLoading,
  useCSSAnimation,
  size,
  onClick,
  ...rest
}) => (
  <StyledButton
    {...rest}
    size={size}
    disabled={disabled || !onClick}
    data-loading={isLoading}
    onClick={onClick}
  >
    <ContentWrap isLoading={Boolean(isLoading)}>{children}</ContentWrap>
    {useCSSAnimation && (
      <CSSAnimationLoader isLoading={Boolean(isLoading)} size={size} />
    )}
    {!useCSSAnimation && (
      <SpringAnimationLoader isLoading={Boolean(isLoading)} />
    )}
  </StyledButton>
);

export { Button };
