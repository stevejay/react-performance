import styled, { css } from "styled-components";

// See https://a11yproject.com/posts/how-to-hide-content/
// Note: The approach of using `&:not(:focus):not(:active)`
// works in modern browsers and IE9+.

const VisuallyHidden = styled.span`
  ${props =>
    props.isFocusable
      ? css`
          /* && for increased specificity: */
          &&:not(:focus):not(:active) {
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
        `
      : css`
          /* && for increased specificity: */
          && {
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
        `}
`;

export { VisuallyHidden };
