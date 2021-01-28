import React from 'react';
import {Paper} from '@material-ui/core'
import { Draggable } from 'react-beautiful-dnd'
import "./PokemonCards.css"


const PokemonCards = (props) => {

    return (
        <Draggable draggableId={props.pokemon.id} index={props.index}>
            {provided => (
                <Paper
                    {...provided.draggableProps} {...provided.dragHandleProps} innerRef={provided.innerRef}
                >
                    <div className='pokemon-cards'
                    >
                        <div>{props.pokemon.name}</div>
                        <img src={props.pokemon.sprite} alt=""/>
                    </div>
                </Paper>
            )}
        </Draggable>
    )
}

export default PokemonCards
