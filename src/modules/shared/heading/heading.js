import styled from "styled-components/macro";
import { color, typography } from "styled-system";

const Heading = styled.div`
  ${color}
  ${typography}
  margin: 0;
  padding: 0;
  font-family: ${props => props.theme.fonts.display};
`;

export { Heading };
