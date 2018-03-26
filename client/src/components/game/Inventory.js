import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class Inventory extends Component {
  displayElements(type, label, labelEmpty) {
    if (this.props.inventory[type] && this.props.inventory[type].length > 0) {
      return (
        <Panel className='text-center' bsStyle="warning">
          <Panel.Heading>
            <Panel.Title componentClass="h4">{label}</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <div>
            {this.props.inventory[type].map((element, i) => {
              if ((type === 'items')) {
                return (
                  <p key={"item-"+i}>
                    <b>{element.title}</b> : <b>Soin:</b> {element.heal} -{' '}
                    <b>Heal</b> {element.quantity}{' '}
                  </p>
                );
              } else {
                return (
                  <p key={"item-"+i}>
                    <b>{element.title}</b> : <b>Dégats:</b> {element.dmg} -{' '}
                    <b>Durabilité</b> {element.durability}{' '}
                  </p>
                );
              }
            })}
            </div>
          </Panel.Body>
        </Panel>
      );
    } else {
      return <h4>{labelEmpty}</h4>;
    }
  }

  displayWeapons() {
    return this.displayElements('weapons', 'Armes', 'Mains nu');
  }

  displaySpells() {
    return this.displayElements('spells', 'Sorts', 'Pas de magie');
  }

  displayItems() {
    return this.displayElements('items', 'Objets', "Pas d'objets");
  }

  render() {
    return (
      <div>
            {this.displayWeapons()}
            {this.displaySpells()}
            {this.displayItems()}
      </div>
    );
  }
}

export default Inventory;
