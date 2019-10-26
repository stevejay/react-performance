import styled from "styled-components";

// See https://a11yproject.com/posts/how-to-hide-content/
// Compatibility: IE9+ and modern browsers; see
// https://caniuse.com/#feat=mdn-css_selectors_not

const VisuallyHidden = styled.span`
  /* && for increased specificity: */
  &&${props => (props.isFocusable ? ":not(:focus):not(:active)" : "")} {
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    padding: 0;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;

export { VisuallyHidden };
