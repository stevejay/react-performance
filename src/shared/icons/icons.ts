import React from "react";
import { createSystemComponent } from "@xstyled/system";
import {
  FiArrowRight as ArrowRightIcon,
  FiMenu as MenuIcon,
  FiLoader as SpinnerIcon,
  FiCheck as TickIcon,
  FiMoreVertical as MoreIcon,
  FiChevronDown as ChevronDownIcon
} from "react-icons/fi";
import { createIcon } from "./create-icon";

const SystemArrowRightIcon = createSystemComponent(React, ArrowRightIcon);
const ArrowRight = createIcon(SystemArrowRightIcon);

const SystemMenuIcon = createSystemComponent(React, MenuIcon);
const Menu = createIcon(SystemMenuIcon);

const SystemSpinnerIcon = createSystemComponent(React, SpinnerIcon);
const Spinner = createIcon(SystemSpinnerIcon);

const SystemTickIcon = createSystemComponent(React, TickIcon);
const Tick = createIcon(SystemTickIcon);

const SystemMoreIcon = createSystemComponent(React, MoreIcon);
const More = createIcon(SystemMoreIcon);

const SystemChevronDownIcon = createSystemComponent(React, ChevronDownIcon);
const ChevronDown = createIcon(SystemChevronDownIcon);

const Icons = {
  ArrowRight,
  ChevronDown,
  Menu,
  More,
  Spinner,
  Tick
};

export { Icons };
