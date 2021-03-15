import React from 'react';
import Typography from '@material-ui/core/Typography';
// import { useDispatch } from "react-redux";
// import * as team_actions from '../store/teams'
import "./PokemonCards2.css"
// import {Paper} from '@material-ui/core'

const PokemonCards2 = (props) => {

    // const dispatch = useDispatch()

    // const release = (e) => {
    //     e.preventDefault()
    //     dispatch(team_actions.removeTeam(e.target.id))
    // }

    return (
        <div className="team">
            <div className="team_container">
                <div className="team_container_display">
                    <Typography variant="h6">
                        {props.team.name}
                    </Typography>
                    <div>
                        {
                            props.team.pokemons.map(pokemon => <img key={pokemon.id} src={pokemon.sprite} alt="" />)
                        }
                    </div>
                </div>
                <div>
                    {/* <button id={props.team.id}>
                        Release
                    </button> */}
                </div>
            </div>
        </div>
    )
}

export default PokemonCards2
