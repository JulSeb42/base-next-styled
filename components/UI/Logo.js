//Packages
import styled from "styled-components";
import Link from "next/link";

// Components
import * as Variables from "../styles/Variables";

// Data
import siteData from "../data/SiteData";

//Styles
const LogoStyled = styled.a`
    color: black;
    text-decoration: none;
    font-weight: ${Variables.FontWeights.Bold};
`;

export default function Logo() {
    return (
        <Link href="/" passHref>
            <LogoStyled>{siteData.siteName}</LogoStyled>
        </Link>
    );
}
