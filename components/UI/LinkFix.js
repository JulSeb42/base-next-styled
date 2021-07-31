//Packages
import styled from "styled-components";
import Link from "next/link";

// Components
import * as Variables from "../styles/Variables";

//Styles
const LinkStyled = styled.a`
    color: black;
    text-decoration: none;
    font-weight: ${Variables.FontWeights.Bold};
`;

export default function Logo(props) {
    return (
        <Link {...props} passHref>
            <LinkStyled>{props.children}</LinkStyled>
        </Link>
    );
}
