import React from 'react';
import './App.css';
import pokemons from './data';
import PokemonList from './PokemonList';
import MyButton from './MyButton';
import Pokemon from './Pokemon';


function App() {
  return (
    <div>
      <h1 className="App">POKEDEX</h1>
      <MyButton pokemons={pokemons}/>
    </div>
  );
}

export default App;
