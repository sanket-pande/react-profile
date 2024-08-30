import React from 'react';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="header-content">
                <h1>Sanket Pande</h1>
                <p>Web Developer | Designer | Creator</p>
            </div>
        </header>
    );
}

export default Header;
