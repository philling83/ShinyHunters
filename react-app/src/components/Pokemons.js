import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import * as pokemon_actions from '../store/pokemons'
import PokemonCards from './PokemonCards'
import Carousel from 'react-elastic-carousel'
import { DragDropContext } from 'react-beautiful-dnd'
import { Droppable } from 'react-beautiful-dnd'
import "./Pokemons.css"


const Pokemons = () => {
    const breakPoints =[
        { width: 500, itemsToShow: 10}
    ]

    const dispatch = useDispatch()
    const pokemons = useSelector((state) => state.pokemons)
    const [mouseSwipe, setMouseSwipe] = useState(false)
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {

        dispatch(pokemon_actions.allPokemons())
        setLoaded(true)

    }, [dispatch])

    // const reorder = (list, startIndex, endIndex) => {
    //     const result = Array.from(list);
    //     const [removed] = result.splice(startIndex, 1);
    //     result.splice(endIndex, 0, removed);

    //     return result;
    // };

    // const onDragEnd = result => {
    //     // dropped outside the list
    //     if (!result.destination) {
    //     return;
    //     }

    //     const pokemons = reorder(
    //     pokemons,
    //     result.source.index,
    //     result.destination.index
    //     );
    // }


    return (
        loaded && (
            <>
            <Carousel className="carousel" breakPoints={breakPoints} showArrows={false} pagination={false}>
                {
                    Object.values(pokemons).map((pokemon, index) => <PokemonCards key={pokemon.id} pokemon={pokemon} index={index} />)
                }
            </Carousel>
            {/* <DragDropContext onDragEnd={onDragEnd}> */}
                {/* <Droppable droppableId="1" direction="vertical" type="pokemon-carousel"> */}
                {/* {(provided) => ( */}
                    {/* <div ref={provided.innerRef} {...provided.droppableProps}> */}
                        {/* {provided.placeholder} */}
                    {/* </div> */}
                {/* )} */}
                {/* </Droppable> */}
            {/* </DragDropContext> */}
            </>
        )
    )
    // return (
    //     loaded && (
    //         <>
    //         <Droppable droppableId="1" direction="horizontal" type="pokemon-carousel">
    //         {(provided) => (
    //             <div ref={provided.innerRef} {...provided.droppableProps}>
    //                 <Carousel className="carousel" breakPoints={breakPoints} enableMouseSwipe={mouseSwipe}>
    //                     {
    //                         Object.values(pokemons).map((pokemon, index) => <PokemonCards key={pokemon.id} pokemon={pokemon} index={index} />)
    //                     }
    //                 </Carousel>
    //                 {provided.placeholder}
    //             </div>
    //         )}
    //         </Droppable>
    //         </>
    //     )
    // )
}


export default Pokemons
