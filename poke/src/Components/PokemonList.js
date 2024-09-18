import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemon, selectPokemon } from '../redux'; // Actions from the combined Redux file


const PokemonList = () => {
    const dispatch = useDispatch();
    const { pokemonList, selectedPokemon } = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchPokemon());
    }, [dispatch]);

    const handlePokemonClick = (pokemon) => {
        dispatch(selectPokemon(pokemon));
    };

    return (
        // This div showing list of all Pokemon
        <div className="container">
            <div className="pokemon-list">
                <h2 className="header">PokeReact</h2>
                <ul className="list">
                    {pokemonList.map((poke, index) => (
                        <li
                            key={index}
                            className="list-item"
                            onClick={() => handlePokemonClick(poke)}
                        >
                            <img src={poke.image} alt={poke.name} />
                            <span>{poke.name}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* This div showing Details of selected Pokemon */}

            <div className="details">
                {selectedPokemon ? (
                    <div>
                        <h2 className="details-header">
                            {selectedPokemon.name.charAt(0).toUpperCase() + selectedPokemon.name.slice(1)}
                        </h2>
                        <img src={selectedPokemon.image} alt={selectedPokemon.name} className="details-img" />
                        <div className="details-info">
                            <div>
                                <strong className="info-label">Name:</strong>
                                <span className="info-value">{selectedPokemon.name}</span>
                            </div>
                            <div>
                                <strong className="info-label">Height:</strong>
                                <span className="info-value">{selectedPokemon.height} cm</span>
                            </div>
                            <div>
                                <strong className="info-label">Weight:</strong>
                                <span className="info-value">{selectedPokemon.weight} kg</span>
                            </div>
                            <div>
                                <strong>Types:</strong>
                                <div className="types-list">
                                    {selectedPokemon.types.slice().reverse().map((type, i) => (
                                        <div key={i}>{type}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <h2>Select Any Pokemon</h2>
                )}
            </div>
        </div>
    );
};

export default PokemonList;
