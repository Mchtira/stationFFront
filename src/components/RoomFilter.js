import React, { Component } from 'react';
import { actions, store } from '../store.js'
import { filterRooms } from '../api.js'

class RoomFilter extends Component {
  sendForm = () => {
    const filters = {
      equipements: store.getState().equipements,
      capacity: store.getState().capacity,
    }
    filterRooms(filters).then(actions.loadRooms)
  }

  handleCheckbox = equipement => {
    actions.handleCheckbox(equipement)
    this.sendForm()
  }

  handleCapacity = capacity => {
    actions.handleCapacity(capacity)
    this.sendForm()
  }

  render() {
    return (
      <div>
        <div>
          Capacité minimum : <input onChange={e => this.handleCapacity(e.target.value)} type='number'/>
        </div>
        <div>
          <input type='checkbox' onChange={() => this.handleCheckbox('TV')}/>
          <label>TV</label>
          <input type='checkbox' onChange={() => this.handleCheckbox('Retro Projecteur')}/>
          <label>Rétro Projecteur</label>
        </div>
        <div>
        </div>
      </div>
    );
  }
}

export default RoomFilter 