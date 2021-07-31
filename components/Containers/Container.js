// Packages
import styled from "styled-components";

// Components
import * as Variables from "../styles/Variables";

// Styles
const Main = styled.main`
    width: 100vw;
    display: grid;
    grid-template-columns: ${Variables.Container.Template};
    padding: ${Variables.Container.Padding};
    row-gap: ${Variables.Margins.M};

    & > * {
        grid-column: ${Variables.Container.Column};
    }
`;

export default function Container({ children }) {
    return <Main>{children}</Main>;
}
