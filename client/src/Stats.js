import React, { Component } from 'react'

class Stats extends Component {

  render () {
    return (
      <ul>
        <li>Nom : {this.props.name}</li>
        <li>Force : {this.props.strenght}</li>
        <li>Santé : {this.props.health}</li>
        <li>Chance : {this.props.luck}</li>
      </ul>
    )
  }

}

export default Stats;
