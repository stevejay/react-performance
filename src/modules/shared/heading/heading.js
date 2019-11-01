import React from "react";
import styled from "styled-components/macro";
import { border, color, space, typography } from "styled-system";
import { useSkipLinkTargeting } from "modules/shared";

const StyledHeading = styled.h1`
  margin: 0;
  padding: 0;
  font-family: ${props => props.theme.fonts.display};
  ${border}
  ${color}
  ${space}
  ${typography}
`;

const Heading = ({ isSkipLink, ...rest }) => {
  const headingRef = React.useRef();
  useSkipLinkTargeting("main-content", isSkipLink ? headingRef : null);
  return <StyledHeading {...rest} ref={headingRef} />;
};

export { Heading };
