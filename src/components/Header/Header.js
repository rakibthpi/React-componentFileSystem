import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h1>This is a Header Part Area</h1>
            <nav>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/protfolio">Protfolio</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;