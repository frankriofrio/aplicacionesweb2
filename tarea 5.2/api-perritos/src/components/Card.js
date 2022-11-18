import React from 'react'
import './Card.css';

const Card = ({ dog, loading, updateDog }) => {

    return (
        <div className="letra1" >
            <img 
                src={dog.image}
                alt="dog"
            />
            <p>
                {dog.breed.name}
            </p>
        </div>
    )
}

export default Card
