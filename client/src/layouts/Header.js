import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RestartButton from '../containers/RestartButtonContainer'
import logo from '../assets/images/logo.svg';

class Header extends Component {
  displayRestartButton() {
    if (window.location.pathname === '/game') {
      return (
        <RestartButton
        />
      );
    }
  }

  render() {
    var divStyle = {
      marginTop:'10px'
    };

    return (
      <div className="App">
        <div className="App-header">
          <div className="App-brand">
            <Link to={process.env.PUBLIC_URL + '/'}>
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
            <h2 style={divStyle}>Jeu dont tu es le Héros</h2>
          </div>
          {this.displayRestartButton()}
        </div>
      </div>
    );
  }
}

export default Header;
