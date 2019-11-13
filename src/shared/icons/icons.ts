import React from "react";
import { createSystemComponent } from "@xstyled/system";
import { ArrowRight as ArrowRightIcon } from "styled-icons/feather/ArrowRight";
import { Menu as MenuIcon } from "styled-icons/feather/Menu";
import { Spinner3 as SpinnerIcon } from "styled-icons/evil/Spinner3";
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
