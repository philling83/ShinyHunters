import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import * as pokemon_actions from '../store/pokemons'
import PokemonCards from './PokemonCards'
import Carousel from 'react-material-ui-carousel'
// import {Paper} from '@material-ui/core'


const Pokemons = () => {

    const dispatch = useDispatch()
    const pokemons = useSelector((state) => state.pokemons)
    const [loaded, setLoaded] = useState(false);
    const [autoPlay, setAutoPlay] = useState(false)
    const [indicators, setIndicators] = useState(false)

    useEffect(() => {

        dispatch(pokemon_actions.allPokemons())
        setLoaded(true)

    }, [])

    return (
        loaded && (
            <>
            <Carousel autoPlay={autoPlay} indicators={indicators}>
                {
                    Object.keys(pokemons).map((id) => <PokemonCards pokemon={pokemons[id]} />)
                }
            </Carousel>
            </>
        )
        )
    }


export default Pokemons
    // {/* function Item(props)
    // {
    //     return (
    //         <Paper>
    //             <p>{props.pokemon.name}</p>
    //         </Paper>
    //     )
    // }
    // )
    // ) */}
