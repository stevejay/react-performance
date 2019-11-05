import styled from "styled-components/macro";
import {
  border,
  color,
  space,
  typography,
  BorderProps,
  ColorProps,
  SpaceProps,
  TypographyProps
} from "styled-system";

type Props = BorderProps & ColorProps & SpaceProps & TypographyProps;

const Heading = styled.h1<Props>`
  margin: 0;
  padding: 0;
  font-family: ${props => props.theme.fonts.display};
  ${border}
  ${color}
  ${space}
  ${typography}
`;

export { Heading };
