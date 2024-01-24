import React from 'react';
import '../styles/Projects.css';
import Card from '../components/Card.js';

const Projects = () => {
    return (
        <div id='projects' className='projects'>
            <div className='title-section'> <h2>{"< projects />"}</h2> </div>

            <div className='container-cards'>
                <Card title='Tic Tac Toe' type='Proyecto personal' website='https://aleedca.github.io/TicTacToe/' github='https://github.com/aleedca/TicTacToe'/>
                <Card title='HeyAso' type='Proyecto universitario' website='https://marilau-re.github.io/HeyAso/' github='https://github.com/MariLau-RE/HeyAso'/>
                <Card title='UpsideDown' type='Hackathon - WGJ' website='https://fiozelaya.itch.io/upside-down' github='https://github.com/aleedca/WomenGameJam22' photo=''/>
                <Card title='Shades of Nüwa' type='Hackathon - GJ+' website='https://fiozelaya.itch.io/shades-of-nuwa' github='https://github.com/aleedca/GameJamPlus2022' photo=''/>
                <Card title='????' type='Proyecto personal' website='' github='' photo=''/>
                <Card title='Biblio-Booking' type='Proyecto universitario' website='https://erick13as.github.io/ProyectoReque/mainPage.html' github='https://github.com/Erick13as/ProyectoReque' photo=''/>
            </div>
        </div>
    );
}

export default Projects;