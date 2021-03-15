import React from 'react';
import "./PokemonCards2.css"
import {Paper} from '@material-ui/core'

const PokemonCards2 = (props) => {
    return (
        <div className="team_container">
            {
                props.team.pokemons.map(pokemon => <img src={pokemon.sprite} />)
            }
        </div>
    )
}

export default PokemonCards2
