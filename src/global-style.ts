import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

const GlobalStyle = createGlobalStyle`
    ${styledNormalize}

    body {
        font-family: ${props => props.theme.fonts.body};
    }

    p, label {
        line-height: ${props => props.theme.lineHeights.md}
    }

    /*
    Change the box model to be border-box by default,
    using the inherit method:
    */
    html {
        box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
`;

export { GlobalStyle };
