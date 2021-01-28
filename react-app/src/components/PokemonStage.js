import React from 'react';
import { useSelector } from "react-redux";
import { Droppable } from 'react-beautiful-dnd'
import "./PokemonStage.css";


const PokemonStage = () => {
    const pokemons = useSelector((state) => state.pokemons)

    return (
        <>
        {/* <Droppable droppableId={pokemons.id}> */}
            {/* {provided => ( */}
                <div className="staging-area"
                // innerRef={provided.innerRef} {...provided.droppableProps}
                >
                    <div className="staging-area-spot">Stage 1</div>
                    <div className="staging-area-spot">Stage 2</div>
                    <div className="staging-area-spot">Stage 3</div>
                    <div className="staging-area-spot">Stage 4</div>
                    <div className="staging-area-spot">Stage 5</div>
                    <div className="staging-area-spot">Stage 6</div>
                    {/* {provided.placeholder} */}
                </div>
            {/* )} */}
        {/* </Droppable> */}
        </>
    )
}

export default PokemonStage
