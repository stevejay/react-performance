import styled from "styled-components/macro";
import { css } from "styled-components";
import {
  color,
  typography,
  ColorProps,
  TypographyProps
} from "@xstyled/system";

type Props = ColorProps & TypographyProps;

const Paragraph = styled.p<Props>(
  ({ theme }) => css`
    margin: 0;
    padding: 0;
    max-width: ${theme.sizes.copy};
    line-height: ${theme.lineHeights[2]};
    ${color}
    ${typography}
  `
);

export { Paragraph };
