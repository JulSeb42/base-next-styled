// Packages
import styled from "styled-components";

// Components
import * as Variables from "./styles/Variables";
import Social from "./Social";

// Data
import SiteData from "./data/SiteData";

// Styles
const Container = styled.footer`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${Variables.Margins.L} 5vw;

    @media ${Variables.Breakpoints.MobileL} {
        justify-content: center;
        flex-direction: column;
    }
`;

const CopyText = styled.p``;

export default function Footer() {
    return (
        <Container>
            <Social />

            <CopyText>
                &copy;{SiteData.siteAuthor} | {SiteData.siteYear}
            </CopyText>
        </Container>
    );
}
