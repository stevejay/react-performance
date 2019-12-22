import {
  backgrounds,
  basics,
  borders,
  color,
  flexboxes,
  layout,
  positioning,
  shadows,
  space,
  BackgroundsProps,
  BasicsProps,
  BordersProps,
  ColorProps,
  FlexboxesProps,
  LayoutProps,
  PositioningProps,
  ShadowsProps,
  SpaceProps
} from "@xstyled/system";
import { styled, AsProps, shouldForwardProp } from "src/shared/styled";
import { flexGrow, FlexGrowProps } from "./flex-grow-style";
import { flexShrink, FlexShrinkProps } from "./flex-shrink-style";

type Props = BackgroundsProps &
  BasicsProps &
  BordersProps &
  ColorProps &
  FlexboxesProps &
  FlexGrowProps &
  FlexShrinkProps &
  LayoutProps &
  PositioningProps &
  ShadowsProps &
  SpaceProps &
  AsProps;

const Box = styled("div", shouldForwardProp)<Props>(
  {
    minWidth: 0,
    display: "flex"
  },
  backgrounds,
  borders,
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
