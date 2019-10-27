import { animated } from "react-spring";
import styled from "styled-components/macro";

const SidebarNavBox = styled(animated.nav)`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 80vw;
  max-width: 300px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primary100};
  overflow-y: scroll;
  box-shadow: ${props => props.theme.shadows.xxl};
  -webkit-overflow-scrolling: touch;
`;

export { SidebarNavBox };
