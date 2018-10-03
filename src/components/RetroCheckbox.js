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
    let { startHour, endHour, day } = filters
    //eslint-disable-next-line
    if (startHour, endHour, day && ![startHour, endHour, day].includes('')) {
      startHour = startHour.split(':').map(elem => Number(elem))
      endHour = endHour.split(':').map(elem => Number(elem))
      startHour = startHour[0] * 60 + startHour[1]
      endHour = endHour[0] * 60 + endHour[1]

      if (startHour > endHour) {
        actions.showMessage("La date n'est pas conforme")
      } else {
        filterRooms(filters).then(actions.loadRooms)
        actions.showMessage('')
      }

    } else {
      actions.showMessage('Merci de remplir tout les champs')
    }
  }

  handleCheckbox = (equipement, e) => {
    actions.handleCheckbox(equipement)
    this.isChecked = !this.isChecked
    this.sendForm(e)
  }

  isChecked = false

  render() {
    return (
      <div> 
        <Input 
        type='checkbox' 
        onChange={(e) => this.handleCheckbox('Retro Projecteur', e)}
        style={style.checkbox}
        checked={this.isChecked}/>
        <label style={style.label}>Rétro Projecteur</label>
      </div>
    );
  }
}

export default RetroCheckbox;
