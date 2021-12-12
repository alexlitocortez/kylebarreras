import React from 'react';
import './NavBar.css';


function NavBar() {
    return (
        <div>
            <nav className='NavBar'>
                <h1 className='NavBar-name'>Kyle Barreras</h1>
                <ul className='NavBar-list'>
                    <li>About</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
