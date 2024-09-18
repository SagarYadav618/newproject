import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';

// Action types
const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
const SELECT_POKEMON = 'SELECT_POKEMON';

// Action creators
export const fetchPokemon = () => async (dispatch) => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
        const data = await response.json();

        const detailedPokemonData = await Promise.all(
            data.results.map(async (poke) => {
                const res = await fetch(poke.url);
                const details = await res.json();
                return {
                    name: poke.name,
                    image: details.sprites.front_default,
                    height: details.height * 10,
                    weight: details.weight / 10,
                    types: details.types.map((typeInfo) => typeInfo.type.name),
                };
            })
        );

        dispatch({ type: FETCH_POKEMON_SUCCESS, payload: detailedPokemonData });
    } catch (error) {
        console.error('Error fetching Pokémon:', error);
    }
};

export const selectPokemon = (pokemon) => ({
    type: SELECT_POKEMON,
    payload: pokemon,
});

// Initial state
const initialState = {
    pokemonList: [],
    selectedPokemon: null,
};

// Reducer
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POKEMON_SUCCESS:
            return {
                ...state,
                pokemonList: action.payload,
            };
        case SELECT_POKEMON:
            return {
                ...state,
                selectedPokemon: action.payload,
            };
        default:
            return state;
    }
};

// Create the Redux store and apply the thunk middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
