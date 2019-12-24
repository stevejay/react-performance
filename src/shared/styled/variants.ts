import { variant } from "@xstyled/system";

const buttonVariants = variant({
  key: "buttons",
  prop: "variant",
  default: "primary"
});

const buttonSizes = variant({
  key: "buttonSizes",
  prop: "size",
  default: "medium"
});

export { buttonVariants, buttonSizes };
