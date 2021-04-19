//Packages
import styled from "styled-components";

// Components
import Link from "next/link";

//Styles
const LinkStyled = styled.a`
    color: black;
    text-decoration: none;
    font-weight: var(--font-weight-bold);
`;

export default function Logo(props) {
    return (
        <Link href={props.href} passHref>
            <LinkStyled>{props.children}</LinkStyled>
        </Link>
    );
}
