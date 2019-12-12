import {
  color,
  typography,
  th,
  ColorProps,
  TypographyProps
} from "@xstyled/system";
import { styled } from "src/shared/styled";

type Props = ColorProps & TypographyProps;

const Paragraph = styled.p<Props>`
  margin: 0;
  padding: 0;
  max-width: ${th.size("copy")};
  line-height: ${th.lineHeight("md")};
  ${color}
  ${typography}
`;

export { Paragraph };
