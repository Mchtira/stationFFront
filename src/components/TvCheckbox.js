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

class TvCheckbox extends Component {
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
        <Input type='checkbox' style={style.checkbox} 
        onClick={(e) => this.handleCheckbox('TV', e)}
        checked={this.isChecked}/>
        <label style={style.label}>TV</label>
      </React.Fragment>
    );
  }
}

export default TvCheckbox;
