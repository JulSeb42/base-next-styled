//Packages
import styled from "styled-components";

// Components
import * as Variables from "./styles/Variables";

// Data
import { SocialLinks } from "./data/Social";

//Styles
const Container = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    li {
        &:not(:last-child) {
            margin-right: ${Variables.Margins.M};
        }

        a {
            color: black;
            text-decoration: none;
        }
    }
`;



export default function Social() {
    return (
        <Container>
            {SocialLinks.map(({ id, name, url }) => (
                <li key={id}>
                    <a
                        href={url}
                        target={name != "Email" && "_blank"}
                        rel="noopener noreferrer"
                    >
                        {name}
                    </a>
                </li>
            ))}
        </Container>
    )
}
