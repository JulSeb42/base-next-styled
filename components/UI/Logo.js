//Packages
import styled from "styled-components"

// Components
import Link from "next/link"

// Data
import siteData from "../SiteData"

//Styles
const LogoStyled = styled.a`
    color: black;
    text-decoration: none;
    font-weight: var(--font-weight-bold);
`;

export default function Logo() {
    return (
        <Link href="/" passHref>
            <LogoStyled>{siteData.siteName}</LogoStyled>
        </Link>
    );
}