import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

const GlobalStyle = createGlobalStyle`
    ${styledNormalize}

    body {
        font-family: ${props => props.theme.fonts.body};
    }

    /* Change the box model to be border-box by default */
    html {
        box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
`;

export { GlobalStyle };
