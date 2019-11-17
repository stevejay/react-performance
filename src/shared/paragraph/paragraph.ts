import {
  color,
  typography,
  ColorProps,
  TypographyProps
} from "@xstyled/system";
import { styled } from "src/shared/styled";

type Props = ColorProps & TypographyProps;

// TODO replace props.theme with getters:
const Paragraph = styled.p<Props>`
  margin: 0;
  padding: 0;
  max-width: ${props => props.theme.sizes.copy};
  line-height: ${props => props.theme.lineHeights.md};
  ${color}
  ${typography}
`;

export { Paragraph };
