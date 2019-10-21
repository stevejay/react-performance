import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

const GlobalStyle = createGlobalStyle`
    ${styledNormalize}

    /* Change the box model to be border-box by default */
    html {
        box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
`;

export { GlobalStyle };
