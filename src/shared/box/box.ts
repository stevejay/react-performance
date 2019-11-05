import styled from "styled-components/macro";
import {
  color,
  flexbox,
  layout,
  position,
  shadow,
  space,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps
} from "styled-system";

type Props = ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  ShadowProps &
  SpaceProps;

const Box = styled.div<Props>`
  min-width: 0;
  display: flex;
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${shadow}
  ${space}
`;

export { Box };
