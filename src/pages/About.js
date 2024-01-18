import React from 'react';
import '../App.css';
import photo from '../assets/images/me.jpeg';


const About = () => {
    return (
        <div id='about' className='about'>
            <div className='title-section'> <h2>{"< about me />"}</h2> </div>

            <div className='information-about'>
                <p>
                    Persona motivada y capaz, buscando adquirir experiencia y crecer
                    profesionalmente para el desarrollo de mis habilidades. Organizada, proactiva
                    y crítica, con un buen desempeño en tareas de manera grupal e individual
                    mostrando mucha atención a los detalles. 

                    <br/><br/>

                    Algunas tecnologías que he usado: <br/><br/>
                    <span>▶ </span>HTML, CSS, React <br/>
                    <span>▶ </span>Firebase, Node.js, Express.js <br/>
                    <span>▶ </span>Python, Java, C++, JavaScript <br/>
                    <span>▶ </span>GitHub <br/>
                </p>

                <div className='photo-about'>
                    <img src={photo} alt="" />
                </div>
            </div>
        </div>
    );
}

export default About;