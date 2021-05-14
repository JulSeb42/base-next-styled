// Packages
import { useState } from "react";
import styled from "styled-components";

// Components
import Link from "next/link";
import Breakpoints from "../Breakpoints";
import Logo from "../UI/Logo";

// Styles
const Container = styled.header`
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    padding: var(--margin-l) 5vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 997;
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    a {
        color: black;
        text-decoration: none;

        &:not(:last-child) {
            margin-right: var(--margin-l);
        }
    }

    @media ${Breakpoints.MobileL} {
        position: absolute;
        top: 0;
        left: 100vw;
        width: 100vw;
        height: 100vh;
        z-index: 998;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        transition: all 0.5s ease;

        a {
            font-size: 24px;

            &:not(:last-child) {
                margin-right: 0;
                margin-bottom: var(--margin-l);
            }
        }

        &.MenuOpen {
            left: 0;
        }
    }
`;

const BurgerStyled = styled.div`
    width: 30px;
    height: 20px;
    position: relative;
    cursor: pointer;
    display: none;
    z-index: 999;

    span {
        width: 100%;
        height: 2px;
        background-color: black;
        position: absolute;
        left: 0;
        transition: var(--transition-short);

        &:first-child {
            top: 0;
        }

        &:nth-child(2) {
            top: calc(50% - 2px / 2);
        }

        &:last-child {
            bottom: 0;
        }
    }

    @media ${Breakpoints.MobileL} {
        display: inherit;
    }

    &.BurgerOpen span {
        &:first-child {
            transform: rotate(45deg);
            top: 9px;
        }

        &:nth-child(2) {
            width: 0;
        }

        &:last-child {
            transform: rotate(-45deg);
            bottom: 9px;
        }
    }
`;

// Nav links
const navLinks = [
    {
        id: 0,
        name: "Home",
        url: "/",
    },
];

export default function Header() {
    // Hamburger navigation on mobile
    const [isNav, setIsNav] = useState(false);
    const contentNav = isNav ? "MenuOpen" : "";

    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const BurgerOpen = isBurgerOpen ? "BurgerOpen" : "";

    return (
        <Container>
            <Logo />
            <BurgerStyled
                className={BurgerOpen}
                onClick={() => {
                    setIsNav(!isNav);
                    setIsBurgerOpen(!BurgerOpen);
                }}
            >
                <span />
                <span />
                <span />
            </BurgerStyled>

            <Nav className={contentNav}>
                {navLinks.map(({ name, url, id }) => (
                    <Link href={url} key={id}>
                        <a>{name}</a>
                    </Link>
                ))}
            </Nav>
        </Container>
    );
}
