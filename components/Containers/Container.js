// Packages
import styled from "styled-components"

// Styles
const Main = styled.main`
    width: 100vw;
    display: grid;
    grid-template-columns: var(--grid-template);
    padding: var(--grid-padding);
    row-gap: var(--margin-m);

    & > * {
        grid-column: var(--grid-column);
    }
`;

export default function Container({ children }) {
    return <Main>{children}</Main>;
}
