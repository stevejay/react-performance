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
  SpaceProps,
  borders,
  BordersProps
} from "@xstyled/system";

type Props = BackgroundsProps &
  BasicsProps &
  ColorProps &
  FlexboxesProps &
  LayoutProps &
  PositioningProps &
  ShadowsProps &
  SpaceProps &
  BordersProps; /* TODO REMOVE */

const Box = styled.div<Props>`
  min-width: 0;
  display: flex;
  ${backgrounds}
  ${color}
  ${flexboxes}
  ${layout}
  ${positioning}
  ${shadows}
  ${space}
  ${basics}
  ${borders} /* TODO REMOVE */
`;

export { Box };
