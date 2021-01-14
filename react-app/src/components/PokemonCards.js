import React from 'react';
import {Paper} from '@material-ui/core'


const PokemonCards = (props) => {

    return (
        <Paper>
            <img src={props.pokemon.sprite} />
        </Paper>
    )
}

export default PokemonCards
