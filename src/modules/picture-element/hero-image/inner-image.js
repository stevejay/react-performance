import React from "react";
import styled from "styled-components/macro";

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${props => (props.isLoaded ? 1 : 0)};
  transition: ${props => props.theme.timings.contentFade + "ms"};
  will-change: opacity;
`;

const InnerImage = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  return <StyledImage onLoad={() => setIsLoaded(true)} isLoaded={isLoaded} />;
};

export { InnerImage };
