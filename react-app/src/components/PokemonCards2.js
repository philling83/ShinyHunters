import React from 'react';
import "./PokemonCards2.css"
// import {Paper} from '@material-ui/core'

const PokemonCards2 = (props) => {
    // console.log(props)
    return (
        <div className="team_container">
            <div>{props.team.name}</div>
            {
                props.team.pokemons.map(pokemon => <img key={pokemon.id} src={pokemon.sprite} alt="" />)
            }
        </div>
    )
}

export default PokemonCards2
