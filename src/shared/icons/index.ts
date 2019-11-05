import { ArrowRight as ArrowRightIcon } from "styled-icons/feather/ArrowRight";
import { Menu as MenuIcon } from "styled-icons/feather/Menu";
import { Spinner3 as SpinnerIcon } from "styled-icons/evil/Spinner3";
import { createIconComponent } from "./create-icon-component";

const ArrowRight = createIconComponent(ArrowRightIcon);
const Menu = createIconComponent(MenuIcon);
const Spinner = createIconComponent(SpinnerIcon);

const Icons = {
  ArrowRight,
  Menu,
  Spinner
};

export { Icons };
