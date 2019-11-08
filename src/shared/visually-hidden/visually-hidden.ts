import styled from "styled-components/macro";
// import { css } from "styled-components";

// See https://zellwk.com/blog/hide-content-accessibly/
// Compatibility: IE9+ and modern browsers; see
// https://caniuse.com/#feat=mdn-css_selectors_not

type Props = {
  readonly isFocusable?: boolean;
};

const visuallyHidden = (props: Props) => `
  /* && is for increased specificity: */
  &&${props.isFocusable ? ":not(:focus):not(:active)" : ""} {
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: auto;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;

const VisuallyHidden = styled.span<Props>`
  ${visuallyHidden}
`;

export { VisuallyHidden, visuallyHidden };
