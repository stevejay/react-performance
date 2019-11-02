import styled from "styled-components/macro";

const CSSTransitionSidebarNavBox = styled.nav`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 80vw;
  max-width: 300px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primary900};
  overflow-y: scroll;
  box-shadow: ${props => props.theme.shadows.xxl};
  z-index: ${props => props.theme.zIndices.sidebar};
  -webkit-overflow-scrolling: touch;
  transition: opacity ${props => props.duration}ms ease-in,
    transform ${props => props.duration}ms ease-in;
  will-change: opacity, transform;
`;

export { CSSTransitionSidebarNavBox };
