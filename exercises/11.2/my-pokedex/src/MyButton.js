import React from 'react';
import PokemonList from './PokemonList';

class MyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      arrayPokemons: [],
    };
  }

  changeArrayPokemons(pokemons, position) {
    this.setState((state) => ({
      arrayPokemons: [...state.arrayPokemons, pokemons[position]],
      count: state.count + 1,
    }));
  }

  MyClick(value) {
    console.log(value)
    const { pokemons } = this.props;
    const { count } = this.state;
    (count <= 8 ?
      this.changeArrayPokemons(pokemons, count) :
      alert('nao pode adicionar mais'));
  }

  PokemonType(type) {
    const { pokemons } = this.props;
    console.log(pokemons.filter(el => el.type === type))
  }




  render() {
    return (
      <div>
        <button name='Electric' onClick={(e) => this.PokemonType(e.target.name)}>Eletric</button>
        <button name='Fire' onClick={(e) => this.PokemonType(e.target.name)}>Fire</button>
        <button name='Bug' onClick={(e) => this.PokemonType(e.target.name)}>Bug</button>
        <button name='Poison' onClick={(e) => this.PokemonType(e.target.name)}>Poison</button>
        <button name='Normal' onClick={(e) => this.PokemonType(e.target.name)}>Normal</button>
        <button name='Dragon' onClick={(e) => this.PokemonType(e.target.name)}>Dragon</button>
        <button name='Hello' onClick={(e) => this.MyClick(e.target.name)}>Click me</button>
        <PokemonList pokemons={this.state.arrayPokemons} />
      </div>
    )
  }
}

export default MyButton;
