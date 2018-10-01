import React, { Component } from 'react';
import { actions, store } from '../store.js'
import { filterRooms } from '../api.js'
import { Button, Input } from 'semantic-ui-react'
import TvCheckbox from '../components/TvCheckbox.js'
import RetroCheckbox from '../components/RetroCheckbox.js'

const style = {
  filter: {
    border: 'solid grey 4px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection:'column',
    alignItems:'center',
    marginTop: '1%',
  }
}

class RoomFilter extends Component {
  sendForm = (e) => {
    e.preventDefault()
    actions.cleanRooms()
    const filters = {
      equipements: store.getState().equipements,
      capacity: store.getState().capacity,
    }
    filterRooms(filters).then(actions.loadRooms)
  }

  handleCapacity = capacity => {
    actions.handleCapacity(capacity)
  }

  render() {
    return (
      <div style={style.filter}>
        <div style={{textAlign: 'center'}}>
          Capacité minimum : 
          <form onSubmit={this.sendForm}>
            <Input
              onChange={e => this.handleCapacity(e.target.value)}
              value={store.getState().capacity}
              type='number'/>
          </form>
        </div>
        <div style={{display: 'flex', alignItems: 'baseline'}}>
          <TvCheckbox/>
          <RetroCheckbox/>
        </div>
      </div>
    );
  }
}

export default RoomFilter 