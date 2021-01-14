import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import * as pokemon_actions from '../store/pokemons'
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'


const Pokemons = () => {

    const dispatch = useDispatch()
    // const pokemons = useSelector((state) => state.pokemons.pokemons)
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {

        dispatch(pokemon_actions.allPokemons())
        setLoaded(true)

    }, [dispatch])
    // const pokemons

    // (async () => {
    //     const response = await fetch('/api/pokemons');
    //     const pokemonObj = await response.json();
    //     pokemons = pokemonObj.pokemons;
    // })();

    return (
        loaded && (

            <div>hello</div>
        )
    //     <Carousel>
    //         {
    //             pokemons.map( (pokemon, i) => <Item key={i} pokemon={pokemon} /> )
    //         }
    //     </Carousel>
    // )

    // function Item(props)
    // {
    //     return (
    //         <Paper>
    //             <p>{props.pokemon.name}</p>
    //         </Paper>
    //     )
    // }
    )
}


export default Pokemons
