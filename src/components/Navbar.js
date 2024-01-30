import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <h2>Alexia Cerdas</h2>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#skills">Skills</a></li>
            </ul>

            
        </div>
    );
}

export default Navbar;