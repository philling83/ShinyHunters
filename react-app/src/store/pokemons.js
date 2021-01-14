const GET_POKEMONS = 'all-pokemons'
// const ADD_POKEMON = 'add-pokemon'
// const DELETE_POKEMONS = 'delete-pokemon'

const setPokemons = (pokemons) => {
    return {type: GET_POKEMONS, payload: pokemons}
}

// const newPokemon = (pokemon) => {
//     return {type: ADD_POKEMON, payload: pokemon}
// }

// const deletePokemon = (pokemon_id) => {
//     return {type: DELETE_POKEMONS, payload: pokemon_id}
// }

export const allPokemons = () => async (dispatch) => {
    const response = await fetch('/api/pokemons/')
    const resJSON = await response.json()
    dispatch(setPokemons(resJSON['pokemons']))

    return response
}

const pokemonReducer = (state = {}, action) => {
    let new_state

    switch(action.type) {
        case GET_POKEMONS:
            // new_state = Object.assign({}, state)
            new_state = {}
            action.payload.forEach(pokemon => {
                new_state[pokemon.id] = pokemon
            })
            // new_state.pokemons = action.payload
            return new_state
        default:
            return state
    }
}

export default pokemonReducer
