import React from "react";
import { ContentWrap } from "./content-wrap";
import { Loader } from "./loader";
import { StyledButton } from "./styled-button";

type ButtonProps = React.ComponentProps<typeof StyledButton> & {
  readonly disabled?: boolean;
  readonly isLoading?: boolean;
  readonly onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  isLoading,
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
    <Loader isLoading={Boolean(isLoading)} />
  </StyledButton>
);

export { Button };
