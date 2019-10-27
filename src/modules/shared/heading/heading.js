import styled from "styled-components/macro";
import { color, typography } from "styled-system";

const Heading = styled.div`
  margin: 0;
  padding: 0;
  font-family: ${props => props.theme.fonts.display};
  ${color}
  ${typography}
`;

export { Heading };
