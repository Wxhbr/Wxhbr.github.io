import React from 'react';
import "./JogoVelha.css";

class JogoVelha extends React.Component {
  constructor(props) {
    super(props);
    localStorage.setItem('marker', 'O');
    this.state = {
      array: [
        {
          0: '',
          1: '',
          2: '',
          3: '',
          4: '',
          5: '',
          6: '',
          7: '',
          8: '',
        }
      ],
      isFinished: false,
    }
    this.markGrid = this.markGrid.bind(this);
  }

  validateRows(arrayGrids) {
    let controle = 0;
    const array = Object.values(arrayGrids[0]);
    const rows = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
    rows.map(el => {
      array.reduce((acc, cur) => {
        if (acc === cur) {
          controle++;
          return acc;
        }
        return cur;
      })
    })
    // while(teste) {

    //   while(controle && arrayGrids[0]) {
    //     console.log('teste', index);
    //     if (arrayGrids[index] !== arrayGrids[index + 1]) controle = false;
    //     index++;
    //   }
    // }
  }

  gameOver(arrayGrids) {
    this.validateRows(arrayGrids)
  }

  markGrid(event, arrayGrids) {
    const { target } = event;
    const { id } = target;
    const marker = localStorage.getItem('marker');
    if (marker === 'O') {
      localStorage.setItem('marker', 'X');
      target.innerHTML = 'X';
      this.setState((state) => ({
        array: [{
          ...state.array[0],
          [`${id}`]: localStorage.getItem('marker'),
        }]
      }))
    }
    else {
      localStorage.setItem('marker', 'O');
      target.innerHTML = 'O';
      this.setState((state) => ({
        array: [{
          ...state.array[0],
          [`${id}`]: localStorage.getItem('marker'),
        }]
      }))
    }
  }

  gridJogoDaVelha() {
    const arrayGrids = []
    for (let index = 0; index < 9; index++) {
      arrayGrids[index] = <button type="button" id={index} key={index} className="grid" onClick={(e) => this.markGrid(e, arrayGrids)} />
    }
    return arrayGrids;
  }

  render() {
    const { isFinished, array } = this.state;
    this.gameOver(array);
    if (isFinished) return <h1>O JOGO ACABOU</h1>
    return (
      <div>
        <div>Jogo da Velha: </div>
        <div className="grid_container">
          {this.gridJogoDaVelha()}
        </div>
      </div>
    );
  }
}

export default JogoVelha;