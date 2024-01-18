import React from 'react';
import '../App.css';

const Skills = () => {
    return (
        <div id='skills' className='skills'>
            <div className='title-section'> <h2>{"< skills />"}</h2> </div>

            <div className='information-skills'>
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
            </div>
        </div>
    );
}

export default Skills;