import styled from "styled-components/macro";
import { css } from "styled-components";
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

type Props = BordersProps & ColorProps & SpaceProps & TypographyProps;

const Heading = styled.h1<Props>(
  ({ theme }) => css`
  margin: 0;
  padding: 0;
  font-family: ${theme.fonts.display};
  ${borders}
  ${color}
  ${space}
  ${typography}
`
);

export { Heading };
