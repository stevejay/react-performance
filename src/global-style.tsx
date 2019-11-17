import React from "react";
import { Global, css } from "@emotion/core";
import emotionNormalize from "emotion-normalize";

const GlobalStyle = () => (
  <Global
    styles={theme => {
      // eslint-disable-next-line no-console
      console.log("theme", theme);
      return css`
        ${emotionNormalize}

        body {
          font-family: ${theme.fonts.body};
        }

        p,
        label {
          line-height: ${theme.lineHeights.md};
        }

        /*
      Change the box model to be border-box by default,
      using the inherit method:
      */
        html {
          box-sizing: border-box;
        }
        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }
      `;
    }}
  />
);

export { GlobalStyle };
