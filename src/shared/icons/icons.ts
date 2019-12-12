import React from "react";
import { createSystemComponent } from "@xstyled/system";
import {
  ArrowRight as ArrowRightIcon,
  Menu as MenuIcon,
  Loader as SpinnerIcon
} from "@styled-icons/feather";
import { createIcon } from "./create-icon";

const SystemArrowRightIcon = createSystemComponent(React, ArrowRightIcon);
const ArrowRight = createIcon(SystemArrowRightIcon);

const SystemMenuIcon = createSystemComponent(React, MenuIcon);
const Menu = createIcon(SystemMenuIcon);

const SystemSpinnerIcon = createSystemComponent(React, SpinnerIcon);
const Spinner = createIcon(SystemSpinnerIcon);

const Icons = {
  ArrowRight,
  Menu,
  Spinner
};

export { Icons };
