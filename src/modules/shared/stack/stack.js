import styled from "styled-components/macro";
import { spacing } from "./spacing";

// A stack of content
const Stack = styled.div`
  & > * + * {
    ${spacing}
  }

  /* Allow 'margin-bottom: auto' to be used on a stack child */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

export { Stack };

// use ${props => props.theme.spacing[2]} or whatever

// spacing: https://orbit.kiwi/layout/stack/react/#spacing

// styled system + https://github.com/system-ui/theme-specification
