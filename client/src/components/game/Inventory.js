import React, { Component } from 'react';
import GenericPanel from '../../containers/GenericPanelContainer';

class Inventory extends Component {
  displayElements(type, label, labelEmpty) {
    if (this.props.inventory[type] && this.props.inventory[type].length > 0) {
      return (
        <GenericPanel titleColor='warning' title={label}>
          <div>
            {this.props.inventory[type].map((element, i) => {
              if (type === 'items') {
                return (
                  <p key={'item-' + i}>
                    <b>{element.title}</b> : <b>Soin:</b> {element.heal} -{' '}
                    <b>Heal</b> {element.quantity}{' '}
                  </p>
                );
              } else {
                return (
                  <p key={'item-' + i}>
                    <b>{element.title}</b> : <b>Dégats:</b> {element.dmg} -{' '}
                    <b>Durabilité</b> {element.durability}{' '}
                  </p>
                );
              }
            })}
          </div>
        </GenericPanel>
      );
    } else {
      return <h4>{labelEmpty}</h4>;
    }
  }

  render() {
    return (
      <div>
        {this.displayElements('weapons', 'Armes', 'Mains nu')}
        {this.displayElements('spells', 'Sorts', 'Pas de magie')}
        {this.displayElements('items', 'Objets', "Pas d'objets")}
      </div>
    );
  }
}

export default Inventory;
