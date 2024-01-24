import React from 'react';
import '../styles/Projects.css';
import imgGithub from '../assets/images/githubdark.png';
import imgLink from '../assets/images/linkdark.png';
import imgPlant from '../assets/images/plant.png';

const Card = (props) => {
    return (
        <div className='card'>
            <div className='card-content'>
                <div className='card-logo'>
                    <img src={imgPlant} alt="" />
                </div>

                <div className='card-header'>
                    <h3>{props.title}</h3>
                </div>

                <div className='card-body'>
                    <h3>{props.type}</h3>
                    <p>Descripcion aqui</p>
                </div>

                <div className='card-footer'>
                    <a href={props.github} target='_blank' rel="noreferrer"><img src={imgGithub} alt="" /></a>
                    <a href={props.website} target='_blank' rel="noreferrer"><img src={imgLink} alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Card;