import React from "react";
import { th } from "@xstyled/system";
import { useId } from "react-use-id-hook";
import { focusRing } from "src/shared/mixins";
import { styled } from "src/shared/styled";
import { RadioButtonGroupContext } from "./radio-button-group";

// Guide used for styling this control:
// https://scottaohara.github.io/a11y_styled_form_controls/src/radio-button/
// (pattern 1)

type Props = {
  label: string;
  value: string;
  selectedValue: string;
  disabled?: boolean;
  onChange: (value: string) => void;
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

  input:not([disabled]) + & {
    cursor: pointer;
  }

  input[disabled] + & {
    cursor: not-allowed;
  }

  /* before is the outer border, after is the inner indicator */

  &::before,
  &::after {
    content: " ";
    position: absolute;
    box-sizing: border-box;
    border-radius: 100%;
    border: 1px solid;
    width: 1.125em;
    height: 1.125em;
    left: 0.125em;
    top: 50%;
    transform: translateY(-50%);
  }

  &::before {
    box-shadow: 0 0 0 1px ${th.color("gray500")};
  }

  input:checked + &::before {
    border-color: transparent;
    box-shadow: 0 0 0 2px ${th.color("primary900")};
  }

  input:focus + &::before {
    border-color: transparent;
    ${focusRing}
  }

  input:checked + &::after {
    border-color: ${th.color("white")};
    border-width: 4px;
    box-shadow: inset 0 0 0 5px ${th.color("primary900")};
  }
`;

const RadioButton: React.FC<Props> = ({
  label,
  value,
  selectedValue,
  disabled,
  onChange
}) => {
  const inputId = useId();
  const groupName = React.useContext(RadioButtonGroupContext);

  return (
    <StyledWrap>
      <StyledInput
        id={inputId}
        type="radio"
        name={groupName}
        checked={selectedValue === value}
        disabled={disabled}
        onChange={() => onChange(value)}
      />
      <StyledLabel htmlFor={inputId}>{label}</StyledLabel>
    </StyledWrap>
  );
};

export { RadioButton };
