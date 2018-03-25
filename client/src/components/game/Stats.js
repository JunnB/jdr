import React, { Component } from 'react'

class Stats extends Component {
  render () {
    var divStyle = {
      textAlign:'center'
    };
    return (
      <div style={divStyle}>
        <p><b>Nom</b> : {this.props.character.name}</p>
        <p><b>Force</b> : {this.props.character.strenght}</p>
        <p><b>Santé</b> : {this.props.character.health}</p>
        <p><b>Chance</b> : {this.props.character.luck}</p>
      </div>
    )
  }

}

export default Stats;
