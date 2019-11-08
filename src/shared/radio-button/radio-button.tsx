import React from "react";
import styled from "styled-components/macro";
import { visuallyHidden } from "src/shared/visually-hidden";

type Props = {
  readonly label: string;
  readonly groupName: string;
  readonly checked: boolean;
  readonly onChange: () => void;
};

const StyledLabel = styled.label`
  user-select: none;
  cursor: pointer;
  align-self: flex-start;
  position: relative;
  padding-left: 1.75em;
  line-height: 1;

  /* get rid of this */
  /* stylelint-disable */
  &:hover > span {
    background-color: ${props => props.theme.colors.primary100};
  }
`;

const StyledInput = styled.input`
  ${visuallyHidden}
  cursor: pointer;

  & ~ span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    height: 1.25em;
    width: 1.25em;
    background-color: ${props => props.theme.colors.gray100};
  }

  &:checked ~ span {
    background-color: ${props => props.theme.colors.primary900};
  }

  & ~ span:after {
    content: "";
    position: absolute;
    display: none;

    /* left: 0.45em;
    top: 0.2em; */
    left: 0.625em;
    top: 0.625em;

    width: 0.375em;
    height: 0.75em;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -62.5%) rotate(45deg);
  }

  &:checked ~ span:after {
    display: block;
  }
`;

const RadioButton: React.FC<Props> = ({
  label,
  groupName,
  checked,
  onChange
}) => (
  <StyledLabel>
    {label}
    <StyledInput
      type="radio"
      name={groupName}
      checked={checked}
      onChange={onChange}
    />
    <span />
  </StyledLabel>
);

export { RadioButton };
