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
    }
    filterRooms(filters).then(actions.loadRooms)
  }

  handleCheckbox = (equipement, e) => {
    actions.handleCheckbox(equipement)
    this.sendForm(e)
  }

  render() {
    return (
      store.getState().equipements.includes('TV')
      ? <React.Fragment>
          <Input 
            type='checkbox' 
            onChange={(e) => this.handleCheckbox('TV', e)}
            style={style.checkbox}
            checked/>
          <label style={style.label}>TV</label>
        </React.Fragment>
      : <React.Fragment>
          <Input 
            type='checkbox' 
            style={style.checkbox}
            onChange={(e) => this.handleCheckbox('TV', e)}/>
          <label style={style.label}>TV</label>
        </React.Fragment>
    );
  }
}

export default TvCheckbox;
