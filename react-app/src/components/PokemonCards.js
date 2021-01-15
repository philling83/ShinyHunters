import React from 'react';
import {Paper} from '@material-ui/core'


const PokemonCards = (props) => {

    return (
        <Paper elevation={3}>
            <div>{props.pokemon.name}</div>
            <img src={props.pokemon.sprite} />
        </Paper>
    )
}

export default PokemonCards
