import styled from "styled-components/macro";
import { system } from "styled-system";

// A vertical stack of content
const Stack = styled.div`
  .stack > * + * {
    /* margin-top: 1.5rem; */

    ${system({
      marginTop: {
        property: "spacing",
        scale: "space"
      }
    })}
  }

  /* Allow 'margin-bottom: auto' to be used on a stack child */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export { Stack };

// use ${props => props.theme.spacing[2]} or whatever

// spacing: https://orbit.kiwi/layout/stack/react/#spacing

// styled system + https://github.com/system-ui/theme-specification
