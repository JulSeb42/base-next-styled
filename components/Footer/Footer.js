// Packages
import styled from "styled-components";

// Components
import Breakpoints from "../Breakpoints";

// Data
import SiteData from "../SiteData";

// Styles
const Container = styled.footer`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--margin-l) 5vw;

    @media ${Breakpoints.MobileL} {
        justify-content: center;
        flex-direction: column;
    }
`;

const CopyText = styled.p``;

export default function Footer() {
    return (
        <Container>
            <CopyText>
                &copy;{SiteData.siteAuthor} | {SiteData.siteYear}
            </CopyText>
        </Container>
    );
}
