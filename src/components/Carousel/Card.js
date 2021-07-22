import React from 'react';
import "./Card.css";


const Card = ({tech,icon,level}) => {

    return (
        <div className="card">
            <h2>{tech}</h2>
            <img src={icon}  alt={tech} height="50px"/>
            <p>{level}</p>
        </div>
    );
};

export default Card;
