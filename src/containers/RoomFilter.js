import React, { Component } from 'react';
import { actions, store } from '../store.js'
import { filterRooms } from '../api.js'
import { Input } from 'semantic-ui-react'
import TvCheckbox from '../components/TvCheckbox.js'
import RetroCheckbox from '../components/RetroCheckbox.js'

const style = {
  filters: {
    border: 'solid grey 4px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection:'column',
    alignItems:'center',
    marginTop: '1%',
  },
  checkboxs: {
    display: 'flex',
    alignItems: 'baseline'
  }
}

class RoomFilter extends Component {
  sendForm = (e) => {
    e.preventDefault()
    actions.cleanRooms()
    const filters = {
      equipements: store.getState().equipements,
      capacity: store.getState().capacity,
      ...store.getState().reservation
    }
    filterRooms(filters).then(actions.loadRooms)
  }

  handleCapacity = e => {
    actions.handleCapacity(e.target.value)
    this.sendForm(e)
  }

  render() {
    return (
      <div style={style.filters}>
        <div style={{textAlign: 'center'}}>
          Capacité minimum : 
          <Input
            onChange={e => this.handleCapacity(e)}
            value={store.getState().capacity}
            type='number'/>
        </div>
        <div style={style.checkboxs}>
          <TvCheckbox />
          <RetroCheckbox/>
        </div>
      </div>
    );
  }
}

export default RoomFilter 