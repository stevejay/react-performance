import styled from "styled-components/macro";
import { color, typography } from "styled-system";

const Paragraph = styled.div`
  margin: 0;
  padding: 0;
  /* Max of 66 characters per line for readability */
  max-width: 66ch;
  ${color}
  ${typography}
`;

export { Paragraph };
