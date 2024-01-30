import React from 'react';
import '../styles/Projects.css';
import imgGithub from '../assets/images/githublight.png';
import imgLink from '../assets/images/linklight.png';

const Card = (props) => {
    return (
        <div className='card'>
            <div className='card-content'>
                <div className='card-header'>
                    {props.title} 
                    <span>{props.type}</span>
                </div>

                <div className='card-body'>
                    <p>{props.description}</p>
                </div>

                <div className='card-technologies'>
                    {props.tech.map((tech) => {
                        return <span>{tech} </span>
                    })}
                </div>

                <div className='card-links'>
                    <a href={props.github} target='_blank' rel="noreferrer"><img src={imgGithub} alt="" /></a>
                    <a href={props.website} target='_blank' rel="noreferrer"><img src={imgLink} alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Card;