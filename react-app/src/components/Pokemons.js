import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import * as pokemon_actions from '../store/pokemons'
import PokemonCards from './PokemonCards'
import Carousel from 'react-elastic-carousel'
import "./Pokemons.css"


const Pokemons = () => {
    const breakPoints =[
        { width: 500, itemsToShow: 10}
    ]

    const dispatch = useDispatch()
    const pokemons = useSelector((state) => state.pokemons)
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {

        dispatch(pokemon_actions.allPokemons())
        setLoaded(true)

    }, [dispatch])

    return (
        loaded && (
            <>
            <Carousel className="carousel" breakPoints={breakPoints}>
                {
                    Object.values(pokemons).map((pokemon) => <PokemonCards key={pokemon.id} pokemon={pokemon} />)
                }
            </Carousel>
            </>
        )
    )
}


export default Pokemons
