import React from 'react';
// import { useSelector } from "react-redux";
// import { Droppable } from 'react-beautiful-dnd'
import "./PokemonStage.css";


const PokemonStage = () => {
    // const pokemons = useSelector((state) => state.pokemons)

    return (
        <>
        {/* <Droppable droppableId={pokemons.id}> */}
            {/* {provided => ( */}
                <div className="staging-area"
                // innerRef={provided.innerRef} {...provided.droppableProps}
                >
                    <div id="staging-area-1" className="staging-area-spot"></div>
                    <div id="staging-area-2" className="staging-area-spot"></div>
                    <div id="staging-area-3" className="staging-area-spot"></div>
                    <div id="staging-area-4" className="staging-area-spot"></div>
                    <div id="staging-area-5" className="staging-area-spot"></div>
                    <div id="staging-area-6" className="staging-area-spot"></div>
                    {/* {provided.placeholder} */}
                </div>
            {/* )} */}
        {/* </Droppable> */}
        </>
    )
}

export default PokemonStage
