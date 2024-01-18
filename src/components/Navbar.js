import React from 'react';
import sun from '../assets/images/lightmode.png'
import moon from '../assets/images/darkmode.png'
import logodark from '../assets/images/logodark.png'
import logolight from '../assets/images/logolight.png'
import plant2 from '../assets/images/plant2.png'

import '../styles/Navbar.css';

const Navbar = ({theme, setTheme}) => {

    const toggleMode = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark")
    }

    return (
        <div className="navbar">
            <img src={plant2} alt="" title='Made with ReactJS'/>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#skills">Skills</a></li>
            </ul>

            <img onClick={() => toggleMode()} src={theme === "dark" ? sun : moon} alt=""/>
        </div>
    );
}

export default Navbar;