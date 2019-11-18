import {
  backgrounds,
  basics,
  color,
  flexboxes,
  layout,
  positioning,
  shadows,
  space,
  BackgroundsProps,
  BasicsProps,
  ColorProps,
  FlexboxesProps,
  LayoutProps,
  PositioningProps,
  ShadowsProps,
  SpaceProps
} from "@xstyled/system";
import isPropValid from "@emotion/is-prop-valid";
import { styled, AsProps } from "src/shared/styled";
import { flexGrow, FlexGrowProps } from "./flex-grow";
import { flexShrink, FlexShrinkProps } from "./flex-shrink";

type Props = BackgroundsProps &
  BasicsProps &
  ColorProps &
  FlexboxesProps &
  FlexGrowProps &
  FlexShrinkProps &
  LayoutProps &
  PositioningProps &
  ShadowsProps &
  SpaceProps &
  AsProps;

const options = {
  shouldForwardProp: (prop: string) => isPropValid(prop) && prop !== "color"
};

const Box = styled("div", options)<Props>(
  {
    minWidth: 0,
    display: "flex"
  },
  backgrounds,
  color,
  flexboxes,
  flexGrow,
  flexShrink,
  layout,
  positioning,
  shadows,
  space,
  basics
);

export { Box };
