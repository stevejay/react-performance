import styled from "styled-components/macro";
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
  SpaceProps;

const Box = styled.div<Props>`
  min-width: 0;
  display: flex;
  ${backgrounds}
  ${color}
  ${flexboxes}
  ${flexGrow}
  ${flexShrink}
  ${layout}
  ${positioning}
  ${shadows}
  ${space}
  ${basics}
`;

export { Box };
