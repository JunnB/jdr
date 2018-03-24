import React, { Component } from 'react'
import { connect } from 'react-redux';

class Stats extends Component {

  render () {
    return (
      <ul>
        <li>Nom : {this.props.character.name}</li>
        <li>Force : {this.props.character.strenght}</li>
        <li>Santé : {this.props.character.health}</li>
        <li>Chance : {this.props.character.luck}</li>
      </ul>
    )
  }

}

function mapStateToProps(state) {
  return {
    character: state.character.character
  };
}
export default connect(mapStateToProps)(Stats);
