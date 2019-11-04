import styled from "styled-components/macro";
import { color, typography } from "styled-system";

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  /* Max of 66 characters per line for readability */
  max-width: 66ch;
  line-height: 1.5;
  ${color}
  ${typography}
`;

export { Paragraph };
