import React from 'react';
import '../styles/About.css';
import photo from '../assets/images/me.jpeg';

const About = () => {
    return (
        <div id='about' className='about'>
            <div className='title-section'>
                <h2>{"< about me />"}</h2>
            </div>

            <div className='content'>
                <div className='information'>
                    <p> Mi nombre es Alexia Cerdas, soy estudiante de <span>Ingeniería en Computación </span> 
                    en el Instituto Tecnológico de Costa Rica. Me apasiona mucho el deporte, los
                    videojuegos y lo relacionado a productividad. Me gustaría abarcar temas de
                    machine learning o análisis de datos.  <br /><br />

                    Lenguajes de programación que he utilizado: <br />
                    <span>  ▶ </span>JavaScript/TypeScript<br />
                    <span>  ▶ </span>Python<br />
                    <span>  ▶ </span>Java<br />
                    <span>  ▶ </span>C++<br /><br />

                    Y otras tecnologías:<br />
                    <span>  ▶ </span>HTML, CSS, React <br />
                    <span>  ▶ </span>Firebase, Node.js, Express.js <br />

                    <span>  ▶ </span>GitHub, Git <br /></p>
                </div>

                <div className='photo'>
                    <img src={photo} alt="" />
                </div>
            </div>
        </div>
    );
}

export default About;