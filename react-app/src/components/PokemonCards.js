import React from 'react';
import {Paper} from '@material-ui/core'
import "./PokemonCards.css"


const PokemonCards = (props) => {

    function sayHello() {
        alert('Hello!');
    }

    return (
        <div className='pokemon-cards' onClick={sayHello}>
            <div>{props.pokemon.name}</div>
            <img src={props.pokemon.sprite} alt=""/>
        </div>
    )
}

export default PokemonCards
