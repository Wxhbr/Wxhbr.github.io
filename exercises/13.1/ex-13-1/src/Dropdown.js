import React, { Children } from 'react';
import './Dropdown.css';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      item: '',
      isOnScreen: false,
      Favoritos: 'teste 1',
    };
    this.funcDropDown = this.funcDropDown.bind(this);
    this.showDropdown = this.showDropdown.bind(this);
    this.changeBox = this.changeBox.bind(this);
  }

  funcDropDown() {
    this.setState((state) => ({
      isOnScreen: !state.isOnScreen
    }))
  }

  changeBox(event) {
    const value = event.target.innerText;
    console.log(value);
    this.setState({Favoritos: value})
  }

  showDropdown() {
    if (this.state.isOnScreen) {
      return (
        <div className="dropdown">
          {Children.map(this.props.children, child => {
            return (
              <div className="teste" onClick={this.changeBox}>{child}</div>
            )
          })}
        </div>
      )
    }
    return <div></div>
  }

  render() {
    return (
      <div>
        <div className="dropdown">
          <p onClick={() => this.funcDropDown()}>{this.state.Favoritos}</p>
        </div>
        <div>
          {this.showDropdown()}
        </div>
      </div>
    );
  }
}

export default Dropdown;
