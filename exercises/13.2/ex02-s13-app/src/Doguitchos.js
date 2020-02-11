import React from 'react';

class Doguitchos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: '',
      nameUpdated: '',
      arrayImage: [{
        image: '',
        name: '',
      }],
    }
    this.addImagem = this.addImagem.bind(this);
    this.createArrayImage = this.createArrayImage.bind(this);
    this.setName = this.setName.bind(this);
    this.createFetch = this.createFetch.bind(this);
  }

  createFetch() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => this.setState({ data: data.message }))
      .then(() => this.createArrayImage())
  }

  addImagem() {
    return (
      <div>
        {this.state.arrayImage.map(({ image }) => (
          <div key={this.state.nameUpdated}>            
            <img key={this.state.nameUpdated} src={image} alt="dogs" />
          </div>
        ))}
      </div>
    );
  }

  createArrayImage() {    
    this.setState((state) => {
      if (state.arrayImage.length >= 10) state.arrayImage.pop()
      return ({
        arrayImage: state.arrayImage[0].image === ''
         ? [{ image: state.data, name: state.nameUpdated }]
          : [{ image: state.data, name: state.nameUpdated }, ...state.arrayImage]
      })
    })
  }

  setName(event) {
    this.setState({ nameUpdated: event.target.value })
  }

  render() {
    console.log(this.state.arrayImage)
    return (
      <div>
        <input type='text' onChange={this.setName} />
        <button type='button' onClick={this.createFetch}>Clique pra add doguitchos</button>
        {this.state.arrayImage[0].image === '' ? null : this.addImagem()}
      </div>
    )
  }
}

export default Doguitchos;
