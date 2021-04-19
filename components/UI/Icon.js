import styled, {css} from "styled-components"
import { ReactSVG } from "react-svg";

const StyledSVGIcon = styled(ReactSVG)`
    svg {
        fill: black;
        ${({ size }) => size && css`
            width: ${size};
            height: ${size};
        `}
    }

    path {
        ${({ color }) => color && css`
            fill: ${color};
        `}
    }
`;

export default function Icon(props) {
    return (
        <StyledSVGIcon
            src={`/icons/${props.name}.svg`}
            color={props.color}
            size={props.size}
        />
    );
};

// How to use
// Import in the file you want to use this component
// import Icon from "/path/to/Icon.js"
// Use the component
// <Icon name="name-of-icon" size="32px" color="color" />