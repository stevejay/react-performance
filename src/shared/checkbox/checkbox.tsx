import React from "react";

type Props = {
  readonly label: string;
  readonly name: string;
  readonly checked: boolean;
  readonly onChange: () => void;
};

const Checkbox: React.FC<Props> = ({ label, name, checked, onChange }) => (
  <label>
    <input type="checkbox" name={name} checked={checked} onChange={onChange} />
    {label}
  </label>
);

export { Checkbox };
