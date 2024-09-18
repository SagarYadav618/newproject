
Project flow :-
first we go inside the project 
Poke-Project and then use cd poke 

second we start the project using npm start command 

importent files :- 
in this project have some importent file like :
public folder inside have 
public.index:- its root file 
src folder inside have 
src/
├── components/
│   └── PokemonList.js  // Pokemon list and details component
├── redux.js            // Combined Redux actions, reducer, and store
├── App.js              // Main app component
├── App.css             // CSS file for styling
└── index.js            // React entry point
 
Detailed Explanation:
src/components/PokemonList.js: This file contains the PokemonList component, which fetches Pokemon data and handles the display of the list and selected Pokemon details using Redux.

src/redux.js: This single file contains:
Actions: fetchPokemon, selectPokemon
Reducer: rootReducer which handles the state of Pokemon list and selected Pokémon
Store: Configured with thunk middleware to handle asynchronous actions
src/App.js: The main component of the app, where the Provider from react-redux is used to connect the app to the Redux store.

src/App.css: Contains all the styles for the Pokemon list and details view.

src/index.js: The entry point of your React app, which renders the App component.

