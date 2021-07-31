// Packages
import { createGlobalStyle } from "styled-components";
import * as Variables from "./Variables";

// Styles
export const GlobalStyles = createGlobalStyle`
    html,
    body {
        font-family: ${Variables.FontFamilies.Body};
        line-height: ${Variables.LineHeight};
    }
`;
