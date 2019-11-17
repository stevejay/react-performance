import React from "react";
import { styled } from "src/shared";

type StyledProps = {
  readonly isLoaded: boolean;
};

const StyledImage = styled.img<StyledProps>`
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${props => (props.isLoaded ? 1 : 0)};
  transition: ${props => props.theme.timings.contentFade}ms;
  will-change: opacity;
`;

type Props = React.ImgHTMLAttributes<HTMLImageElement>;

const InnerImage: React.FC<Props> = props => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <StyledImage
      {...props}
      onLoad={() => setIsLoaded(true)}
      isLoaded={isLoaded}
    />
  );
};

export { InnerImage };
