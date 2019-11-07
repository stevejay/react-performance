import React from "react";

type Props = {
  readonly label: string;
  readonly groupName: string;
  readonly checked: boolean;
  readonly onChange: () => void;
};

const RadioButton: React.FC<Props> = ({
  label,
  groupName,
  checked,
  onChange
}) => (
  <label>
    <input
      type="radio"
      name={groupName}
      checked={checked}
      onChange={onChange}
    />
    {label}
  </label>
);

export { RadioButton };
