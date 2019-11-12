import React from "react";
import styled from "styled-components/macro";
import useId from "@charlietango/use-id";
import { focusRing } from "src/shared/mixins";

type Props = {
  readonly label: string;
  readonly name: string;
  readonly checked: boolean;
  readonly disabled?: boolean;
  readonly onChange: () => void;
};

const StyledWrap = styled.div`
  position: relative;
  align-self: flex-start;
`;

const StyledInput = styled.input`
  position: absolute;
  appearance: none;
  background: none;
  opacity: 1e-6;
  z-index: 2;
  margin: 0;
  padding: 0;
  border: 1px solid;
  width: 1.125em;
  height: 1.125em;
  font-size: 1rem;
  left: 0.125em;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  /*
  Had to add the rule here instead of in StyledLabel because
  CSS auto-formatting was breaking the rule.
  */
  &[disabled] + label {
    opacity: 0.5;
  }

  &[disabled] {
    cursor: not-allowed;
  }
`;

const StyledLabel = styled.label`
  display: inline-block;
  padding-left: 2em;
  user-select: none;

  ${/* sc-selector */ StyledInput}:not([disabled]) + & {
    cursor: pointer;
  }

  /* before is the outer border, after is the inner indicator */

  &::before,
  &::after {
    content: " ";
    position: absolute;
  }

  &::before {
    box-sizing: border-box;
    border-radius: 2px;
    border: 1px solid;
    box-shadow: 0 0 0 1px ${props => props.theme.colors.gray500};
    width: 1.125em;
    height: 1.125em;
    left: 0.125em;
    top: 50%;
    transform: translateY(-50%);
  }

  ${/* sc-selector */ StyledInput}:checked + &::before {
    border-color: transparent;
    box-shadow: 0 0 0 2px ${props => props.theme.colors.gray500};
  }

  ${/* sc-selector */ StyledInput}:checked:not([disabled]) + &::before {
    box-shadow: 0 0 0 2px ${props => props.theme.colors.primary900};
  }

  ${/* sc-selector */ StyledInput}:focus + &::before {
    border-color: transparent;
    ${focusRing}
  }

  ${/* sc-selector */ StyledInput}:checked + &::after {
    border: 0;
    border-bottom: 4px solid ${props => props.theme.colors.gray500};
    border-right: 4px solid ${props => props.theme.colors.gray500};
    height: 0.825em;
    left: 0.425em;
    top: calc(50% - 0.1em);
    transform-origin: center center;
    transform: translateY(-50%) rotate(45deg) scale(1);
    width: 0.5em;
  }

  ${/* sc-selector */ StyledInput}:checked:not([disabled]) + &::after {
    border-bottom: 4px solid ${props => props.theme.colors.primary900};
    border-right: 4px solid ${props => props.theme.colors.primary900};
  }
`;

const Checkbox: React.FC<Props> = ({
  label,
  name,
  checked,
  disabled,
  onChange
}) => {
  const inputId = useId("checkbox");

  return (
    <StyledWrap>
      <StyledInput
        type="checkbox"
        id={inputId}
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <StyledLabel htmlFor={inputId}>{label}</StyledLabel>
    </StyledWrap>
  );
};

export { Checkbox };
