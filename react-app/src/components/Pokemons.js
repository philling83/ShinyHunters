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

    // const onDragEnd = result => {
    //     //To do
    // }

    return (
        loaded && (
            <>
            <Droppable droppableId={pokemons.id} direction="horizontal">
            {provided => (
                <Carousel className="carousel" breakPoints={breakPoints} enableMouseSwipe={mouseSwipe} innerRef={provided.innerRef} {...provided.droppableProps}>
                    {/* <div> */}
                        {
                            Object.values(pokemons).map((pokemon, index) => <PokemonCards key={pokemon.id} pokemon={pokemon} index={index} />)
                        }
                    {/* </div> */}
                </Carousel>
            )}
            </Droppable>
            </>
        )
    )
}


export default Pokemons
