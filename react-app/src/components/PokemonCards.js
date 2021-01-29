import React from 'react';
import {Paper} from '@material-ui/core'
import ReactDOM from 'react-dom';
import { Draggable } from 'react-beautiful-dnd'
import "./PokemonCards.css"


const PokemonCards = (props) => {

    const addToTeam = () => {
        const removeFromTeam = (e) => {
            let id = e.target.parentNode.parentNode.id.slice(-1)
            ReactDOM.unmountComponentAtNode(document.getElementById(`staging-area-${id}`))
        }

        let element = (
            <div className='staging-area_pokemon-cards' onClick={(e) => removeFromTeam(e)}>
                <img src={props.pokemon.sprite} alt=""/>
            </div>
        )

        for (let i = 1; i < 7; i++) {
            let stagingArea = document.getElementById(`staging-area-${i}`)

            if (stagingArea.innerHTML) {
                continue;
            } else {
                ReactDOM.render(element, stagingArea)
                break;
            }
        }
    }

    return (
        // <Draggable draggableId={props.pokemon.id.toString()} index={props.index}>
            // {(provided) => (
                // <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    // <Paper>
                        <div className='carousel_pokemon-cards' onClick={addToTeam}>
                            <div className="carousel_pokemon-title">{props.pokemon.name}</div>
                            <img src={props.pokemon.sprite} alt=""/>
                        </div>
                    // </Paper>
                // </div>
            // )}
        // </Draggable>
    )
}

export default PokemonCards
