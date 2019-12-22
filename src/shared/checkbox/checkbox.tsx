import React from "react";
import { th } from "@xstyled/system";
import { useId } from "react-use-id-hook";
import { focusRing } from "src/shared/mixins";
import { styled } from "src/shared/styled";
import { Icons } from "src/shared/icons";

type Props = {
  readonly label: string;
  readonly name: string;
  readonly checked: boolean;
  readonly disabled?: boolean;
  readonly onChange: () => void;
};

const StyledWrap = styled.div`
  position: relative;
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

/* ::before is the outer border */
const StyledLabel = styled.label`
  display: inline-block;
  padding-left: 2em;

  input:not([disabled]) + & {
    cursor: pointer;
  }

  input[disabled] + & {
    cursor: not-allowed;
  }

  &::before,
  input + & > svg {
    box-sizing: border-box;
    position: absolute;
    width: 1.125em;
    height: 1.125em;
    left: 0.125em;
    top: 50%;
    transform: translateY(-50%);
  }

  &::before {
    content: " ";
    border-radius: 2px;
    border: 1px solid ${th.color("gray900")};
    box-shadow: 0 0 0 1px ${th.color("gray500")};
  }

  input:checked:not([disabled]) + &::before {
    border-color: transparent;
    background-color: ${th.color("primary900")};
    box-shadow: 0 0 0 1px ${th.color("primary900")};
  }

  input:focus:not([disabled]) + &::before {
    border-color: transparent;
    ${focusRing}
  }

  input[disabled] + & {
    opacity: 0.5;
  }

  input[disabled] + &::before {
    border-color: ${th.color("gray500")};
  }

  input + & > svg {
    visibility: hidden;
    color: ${th.color("white")};
  }

  input:checked + & > svg {
    visibility: visible;
  }

  input[disabled]:checked + & > svg {
    color: ${th.color("gray500")};
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
      <StyledLabel htmlFor={inputId}>
        <Icons.Tick size={2} />
        {label}
      </StyledLabel>
    </StyledWrap>
  );
};

export { Checkbox };
