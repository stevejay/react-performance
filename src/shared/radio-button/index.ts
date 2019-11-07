import { RadioButton } from "./radio-button";
import { RadioButtonGroup } from "./radio-button-group";

type RadioButtonType = typeof RadioButton & {
  Group: typeof RadioButtonGroup;
};

const RadioButtonExport = RadioButton as RadioButtonType;
RadioButtonExport.Group = RadioButtonGroup;

export { RadioButtonExport as RadioButton };
