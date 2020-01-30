import React from 'react';
import Image from './Image';

class Pokemon extends React.Component {
  render() {
    const { name, type, image, averageWeight} = this.props.pokemon;
    return (
      <div className="flexBorder">
        <Image src={image} alt="Pokemons"/>
        <p><strong>Nome:</strong> {name},
        <br /><strong>Tipo:</strong> {type}
        <br /><strong>Peso medio:</strong> {averageWeight.value}{averageWeight.measurementUnit}</p>
      </div>
    );
  }
}

export default Pokemon;