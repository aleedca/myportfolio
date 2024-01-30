import React from 'react';
import '../styles/Projects.css';
import Card from '../components/Card.js';

let projects = [
    {
        title: 'Tic Tac Toe',
        type: 'Proyecto personal',
        tech: ['React', 'HTML', 'CSS', 'JS'],
        description: 'Simple videojuego web, puede jugarse con dos jugadores en un mismo dispositivo. El modo de juego para un jugador estará haciéndose próximamente. ',
        website: 'https://aleedca.github.io/TicTacToe/',
        github: 'https://github.com/aleedca/TicTacToe'
    },

    {
        title: 'HeyAso',
        type: 'Trabajo práctico',
        tech: ['HTML', 'CSS', 'JS', 'Firebase'],
        description: 'Sistema para las asociaciones del TEC Costa Rica, brinda la facilidad de administrar eventos y actividades en ellas para fomentar la participación de los estudiantes en período lectivo.',
        website: 'https://marilau-re.github.io/HeyAso/',
        github: 'https://github.com/MariLau-RE/HeyAso'
    },

    {
        title: 'UpsideDown',
        type: 'Hackathon - WGJ 2022',
        tech: ['Unity', 'C#'],
        description: 'Videojuego hecho en 48 horas de forma grupal, este le permite al jugador aprender de los diferentes niveles a punta de prueba y error con el fin de llegar a la victoria y rescatar lo perdido.',
        website: 'https://fiozelaya.itch.io/upside-down',
        github: 'https://github.com/aleedca/WomenGameJam22'
    },

    {
        title: 'Biblio-Booking',
        type: 'Trabajo práctico',
        tech: ['HTML', 'CSS', 'JS', 'Firebase'],
        description: 'Sistema para alquilar cubículos de estudio en una biblioteca de forma rápida y sencilla, de manera que el proceso se evite ir presencialmente a la bilbioteca para tramitar el préstamo de los cubículos.',
        website: 'https://erick13as.github.io/ProyectoReque/mainPage.html',
        github: 'https://github.com/Erick13as/ProyectoReque'
    }
]

const Projects = () => {
    return (
        <div id='projects' className='projects'>
            <div className='title-section'> <h2>{"< projects />"}</h2> </div>

            <div className='container-cards'>
                {projects.map((project) => {
                    return <Card title={project.title} type={project.type} tech={project.tech} description={project.description} website={project.website} github={project.github} />    
                })}
                </div>
        </div>
    );
}

export default Projects;