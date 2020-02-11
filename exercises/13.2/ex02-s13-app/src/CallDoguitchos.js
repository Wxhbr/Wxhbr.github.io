import React from 'react';
import Doguitchos from './Doguitchos';

class CallDoguitchos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      components: [],
    }
    this.addComponent = this.addComponent.bind(this);
  }

  addComponent() {
    this.setState({components: <Doguitchos />});
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.addComponent}>Criar Componente Doguitchos</button>
        {this.state.components}
      </div>
    )
  }
}

export default CallDoguitchos;
