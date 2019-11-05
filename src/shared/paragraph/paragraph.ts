import styled from "styled-components/macro";
import { color, typography, ColorProps, TypographyProps } from "styled-system";

type Props = ColorProps & TypographyProps;

const Paragraph = styled.p<Props>`
  margin: 0;
  padding: 0;
  /* Max of 66 characters per line for readability */
  max-width: 66ch;
  line-height: 1.5;
  ${color}
  ${typography}
`;

export { Paragraph };
