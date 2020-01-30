import React from 'react';
import Pokemon from './Pokemon';
import './App.css';

class PokemonList extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div className="flexBox">
        {pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon}/>)}
      </div>
    );
  }
}

export default PokemonList;