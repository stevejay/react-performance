import styled from "styled-components/macro";

const SkipLinkButton = styled.button`
  position: absolute;
  left: 1em;
  top: 1em;
  appearance: none;
  background: ${props => props.theme.colors.white};
  border-spacing: 0;
  border-radius: ${props => props.theme.radii[1]};
  color: ${props => props.theme.colors.link};
  font-weight: ${props => props.theme.fontWeights.normal};
  text-decoration: underline;
  padding: ${props => props.theme.space.xs};
`;

export { SkipLinkButton };
