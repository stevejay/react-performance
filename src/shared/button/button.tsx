import React from "react";
import { ContentWrap } from "./content-wrap";
import { CSSAnimationLoader } from "./css-animation-loader";
import { SpringAnimationLoader } from "./spring-animation-loader";
import { StyledButton } from "./styled-button";

type ButtonProps = React.ComponentProps<typeof StyledButton> & {
  readonly disabled?: boolean;
  readonly isLoading?: boolean;
  readonly useCSSAnimation: boolean;
  readonly onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  isLoading,
  useCSSAnimation,
  onClick,
  ...rest
}) => (
  <StyledButton
    {...rest}
    disabled={disabled || !onClick}
    data-loading={isLoading}
    onClick={isLoading ? undefined : onClick}
  >
    <ContentWrap isLoading={Boolean(isLoading)}>{children}</ContentWrap>
    {useCSSAnimation && <CSSAnimationLoader isLoading={Boolean(isLoading)} />}
    {!useCSSAnimation && (
      <SpringAnimationLoader isLoading={Boolean(isLoading)} />
    )}
  </StyledButton>
);

export { Button };
