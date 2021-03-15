const GET_TEAMS = 'all-teams';
// const ADD_POKEMON = 'add-pokemon'
// const DELETE_POKEMONS = 'delete-pokemon'

const setTeams = (teams) => {
    return {type: GET_TEAMS, payload: teams}
}

// const newPokemon = (pokemon) => {
//     return {type: ADD_POKEMON, payload: pokemon}
// }

// const deletePokemon = (pokemon_id) => {
//     return {type: DELETE_POKEMONS, payload: pokemon_id}
// }

export const allTeams = () => async (dispatch) => {
    const response = await fetch('/api/teams/')
    const resJSON = await response.json()
    dispatch(setTeams(resJSON['teams']))

    return response
}

const teamReducer = (state = {}, action) => {
    let new_state

    switch(action.type) {
        case GET_TEAMS:
            // new_state = Object.assign({}, state)
            new_state = {}
            action.payload.forEach(team => {
                new_state[team.id] = team
            })
            // new_state.pokemons = action.payload
            return new_state
        default:
            return state
    }
}

export default teamReducer
