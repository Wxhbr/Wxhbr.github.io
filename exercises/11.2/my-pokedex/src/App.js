import React from 'react';
import './App.css';
import pokemons from './data';
import PokemonList from './PokemonList';


function App() {
  return (
    <div>
      <h1 className="App">POKEDEX</h1>
      <PokemonList pokemons={pokemons}/>
    </div>
  );
}

export default App;
