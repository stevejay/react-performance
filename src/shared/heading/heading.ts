import {
  borders,
  color,
  space,
  typography,
  BordersProps,
  ColorProps,
  SpaceProps,
  TypographyProps
} from "@xstyled/system";
import { styled } from "src/shared/styled";

type Props = BordersProps & ColorProps & SpaceProps & TypographyProps;

const Heading = styled.h1<Props>`
  margin: 0;
  padding: 0;
  font-family: ${props => props.theme.fonts.display};
  ${borders}
  ${color}
  ${space}
  ${typography}
`;

export { Heading };
