//Packages
import styled from "styled-components";

// Components
import * as Variables from "./Variables";

// Data
import siteData from "./SiteData";

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

const socialLinks = [
    {
        id: 0,
        name: "Email",
        url: `mailto:${siteData.siteEmail}`,
    },
    {
        id: 1,
        name: "Github",
        url: "#",
    },
];

export default function Social() {
    return (
        <Container>
            {socialLinks.map(({ id, name, url }) => (
                <li key={id}>
                    <a href={url} target={name != "Email" && "_blank"}>
                        {name}
                    </a>
                </li>
            ))}
        </Container>
    );
}
