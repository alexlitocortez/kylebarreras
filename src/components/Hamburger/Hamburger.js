import React from 'react';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';

const HamburgerIcon = styled(FaBars)`
    display: none;

    @media screen and (max-width: 510px) {
        display: block;
        background-size: contain;
        height: 2rem;
        width: 2rem;
        color: white;
        cursor: pointer;
        position: fixed;
        top: 0.6rem;
        right: 0.5rem;
        z-index: 9999;

        &:hover {
            opacity: 0.3;
            transition: 0.2s ease-in-out;
        }
    }
`;

function Hamburger() {
    return (
        <div>
            <HamburgerIcon />
        </div>
    )
}

export default Hamburger
