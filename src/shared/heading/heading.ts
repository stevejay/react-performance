import {
  borders,
  color,
  th,
  space,
  typography,
  BordersProps,
  ColorProps,
  SpaceProps,
  TypographyProps
} from "@xstyled/system";
import { styled, AsProps } from "src/shared/styled";

type Props = BordersProps & ColorProps & SpaceProps & TypographyProps & AsProps;

const Heading = styled.h1<Props>`
  margin: 0;
  padding: 0;
  font-family: ${th.font("display")};
  ${borders}
  ${color}
  ${space}
  ${typography}
`;

export { Heading };
