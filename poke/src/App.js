import React from 'react';
import { Provider } from 'react-redux';
import store from './redux'; // Import from the combined redux file
import PokemonList from './Components/PokemonList';
import './App.css';

function App() {
  return (
    <Provider store={store}>
        <div className="App">
            <PokemonList />
        </div>
    </Provider>
);
}

export default App