import React from 'react';
import '../App.css';
import emaildark from '../assets/images/emaildark.png';
import emaillight from '../assets/images/emaillight.png';
import githubdark from '../assets/images/githubdark.png';
import githublight from '../assets/images/githublight.png';
import linkedindark from '../assets/images/linkedindark.png';
import linkedinlight from '../assets/images/linkedinlight.png';
import resume from '../assets/docs/Resume.pdf';

const Home = ({theme}) => {
    return (
        <div id='home' className='home'>
            <div className='title'> <h1>hello world, <span>alexia</span> here</h1> </div>

            <div className='information'>
                <p>
                    Persona motivada y capaz, buscando adquirir experiencia y crecer
                    profesionalmente para el desarrollo de mis habilidades. Organizada, proactiva
                    y crítica, con un buen desempeño en tareas de manera grupal e individual
                    mostrando mucha atención a los detalles.
                </p>
            </div>

            <div className='socials'>
                <a href='https://github.com/aleedca' target='_blank' rel="noreferrer"><img src={theme === "dark" ? githublight : githubdark} alt="" /></a>
                <a href='https://cr.linkedin.com/in/alexiacerdas' target='_blank' rel="noreferrer"><img src={theme === "dark" ? linkedinlight : linkedindark} alt="" /></a>
                <img src={theme === "dark" ? emaillight : emaildark} alt="" />
            </div>
            
            <a href={resume} download="Resume_AlexiaCerdas" target='_blank' rel="noreferrer">
                <button className='button'>Download resume</button> 
            </a>
        </div>
    );
}

export default Home;