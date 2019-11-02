import styled from "styled-components/macro";

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0;
  outline: 0;
  background-color: ${props => props.theme.colors.black};
  z-index: ${props => props.theme.zIndices.sidebar};
  transition: opacity ${props => props.duration}ms ease-in;
  will-change: opacity;
`;

export { ModalBackdrop };
