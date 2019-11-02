import styled from "styled-components/macro";
import { border, color, space, typography } from "styled-system";

const Heading = styled.h1`
  margin: 0;
  padding: 0;
  font-family: ${props => props.theme.fonts.display};
  ${border}
  ${color}
  ${space}
  ${typography}
`;

export { Heading };
