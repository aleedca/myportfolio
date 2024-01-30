import React from 'react';
import '../styles/Home.css';
import emaillight from '../assets/images/emaillight.png';
import githublight from '../assets/images/githublight.png';
import linkedinlight from '../assets/images/linkedinlight.png';
import resume from '../assets/docs/Resume.pdf';

const Home = () => {
    return (
        <div id='home' className='home'>
            <div className='title'> <h1>hello world, <span>alexia</span> here</h1></div>

            <div className='information'>
                <p>
                    Soy una persona motivada y capaz, buscando adquirir experiencia y crecer
                    profesionalmente para el desarrollo de mis habilidades. Organizada, proactiva
                    y crítica, con un buen desempeño en tareas de manera grupal e individual
                    mostrando mucha atención a los detalles.
                </p>
            </div>

            <div className='socials'>
                <a href='https://github.com/aleedca' target='_blank' rel="noreferrer"><img src={githublight} alt="" /></a>
                <a href='https://cr.linkedin.com/in/alexiacerdas' target='_blank' rel="noreferrer"><img src={linkedinlight} alt="" /></a>
                <img src={emaillight} alt="" />
            </div>
            
            <a href={resume} download="Resume_AlexiaCerdas" target='_blank' rel="noreferrer">
                <button className='button'>Download CV</button> 
            </a>
        </div>
    );
}

export default Home;