import {
  borders,
  color,
  th,
  space,
  typography,
  BordersProps,
  ColorProps,
  SpaceProps,
  TypographyProps
} from "@xstyled/system";
import { css } from "@emotion/core";
import { styled, AsProps, shouldForwardProp } from "src/shared/styled";

type Props = BordersProps & ColorProps & SpaceProps & TypographyProps & AsProps;

const Heading = styled("h1", shouldForwardProp)<Props>`
  margin: 0;
  padding: 0;
  font-family: ${th.font("display")};
  font-weight: bold;
  font-size: 2rem;
  line-height: 1.3;
  ${borders}
  ${color}
  ${space}
  ${typography}
  ${props =>
    props.as === "h2" &&
    css`
      font-size: 1.5rem;
      line-height: 1.4;
    `}
    ${props =>
      props.as === "h3" &&
      css`
        font-size: 1.125rem;
        line-height: 1.4;
      `}
      ${props =>
        props.as === "h4" &&
        css`
          font-size: 1rem;
          line-height: 1.3;
          text-transform: uppercase;
        `}
        ${props =>
          props.as === "h5" &&
          css`
            font-size: 0.875rem;
            line-height: 1.3;
            text-transform: uppercase;
          `}
`;

export { Heading };
