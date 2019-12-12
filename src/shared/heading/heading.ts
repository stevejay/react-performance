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
import isPropValid from "@emotion/is-prop-valid";
import { styled, AsProps } from "src/shared/styled";

type Props = BordersProps & ColorProps & SpaceProps & TypographyProps & AsProps;

const shouldForwardProp = (prop: string) =>
  isPropValid(prop) && prop !== "fontSize" && prop !== "fontWeight";

const Heading = styled("h1", { shouldForwardProp })<Props>`
  margin: 0;
  padding: 0;
  font-family: ${th.font("display")};
  ${borders}
  ${color}
  ${space}
  ${typography}
`;

export { Heading };
