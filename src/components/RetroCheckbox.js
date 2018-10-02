import React, { Component } from 'react';
import { actions, store } from '../store.js'
import { Input } from 'semantic-ui-react'
import { filterRooms } from '../api.js'

const style = {
  label: {
    marginRight: '1em'
  },
  checkbox: {
    marginRight: '0.5em'
  },
}

class RetroCheckbox extends Component {
  sendForm = (e) => {
    e.preventDefault()
    actions.cleanRooms()
    const filters = {
      equipements: store.getState().equipements,
      capacity: store.getState().capacity,
      ...store.getState().reservation
    }
    filterRooms(filters)
      .then(actions.loadRooms)
  }

  handleCheckbox = (equipement, e) => {
    actions.handleCheckbox(equipement)
    this.isChecked = !this.isChecked
    this.sendForm(e)
  }

  isChecked = false

  render() {
    return (
      <React.Fragment> 
        <Input 
        type='checkbox' 
        onChange={(e) => this.handleCheckbox('Retro Projecteur', e)}
        style={style.checkbox}
        checked={this.isChecked}/>
        <label style={style.label}>Rétro Projecteur</label>
      </React.Fragment>
    );
  }
}

export default RetroCheckbox;
