import React from "react";
import { th } from "@xstyled/system";
import { useId } from "react-use-id-hook";
import { focusRing } from "src/shared/mixins";
import { styled } from "src/shared/styled";

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

  &[disabled] {
    cursor: not-allowed;
  }
`;

/* before is the outer border, after is the inner indicator */
const StyledLabel = styled.label`
  display: inline-block;
  padding-left: 2em;
  user-select: none;

  input:not([disabled]) + & {
    cursor: pointer;
  }

  &::before,
  &::after {
    content: " ";
    position: absolute;
  }

  &::before {
    box-sizing: border-box;
    border-radius: 2px;
    border: 1px solid;
    box-shadow: 0 0 0 1px ${th.color("gray500")};
    width: 1.125em;
    height: 1.125em;
    left: 0.125em;
    top: 50%;
    transform: translateY(-50%);
  }

  input:checked + &::before {
    border-color: transparent;
    box-shadow: 0 0 0 2px ${th.color("gray500")};
  }

  input:checked:not([disabled]) + &::before {
    box-shadow: 0 0 0 2px ${th.color("primary900")};
  }

  input:focus:not([disabled]) + &::before {
    border-color: transparent;
    ${focusRing}
  }

  input:checked + &::after {
    border: 0;
    border-bottom: 4px solid ${th.color("gray500")};
    border-right: 4px solid ${th.color("gray500")};
    height: 0.825em;
    left: 0.425em;
    top: calc(50% - 0.1em);
    transform-origin: center center;
    transform: translateY(-50%) rotate(45deg) scale(1);
    width: 0.5em;
  }

  input:checked:not([disabled]) + &::after {
    border-bottom: 4px solid ${th.color("primary900")};
    border-right: 4px solid ${th.color("primary900")};
  }

  input[disabled] + & {
    opacity: 0.5;
  }
`;

const Checkbox: React.FC<Props> = ({
  label,
  name,
  checked,
  disabled,
  onChange
}) => {
  const inputId = useId();

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
