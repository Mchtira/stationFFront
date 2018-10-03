import React, { Component } from 'react';
import { actions, store } from '../store.js'
import { filterRooms } from '../api.js'
import { Input } from 'semantic-ui-react'
import TvCheckbox from '../components/TvCheckbox.js'
import RetroCheckbox from '../components/RetroCheckbox.js'

const style = {
  filters: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    border: 'solid black 2px',
    background: 'white',
    marginTop: '1%',
    padding: '2%',
  },
  inputcapacity: {
    paddingLeft: '2%',
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
    let { startHour, endHour, day } = filters
    // eslint-disable-next-line
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

  handleCapacity = e => {
    actions.handleCapacity(e.target.value)
    this.sendForm(e)
  }

  render() {
    return (
      <div style={style.filters}>
         <label style={{display: 'flex', alignItems: 'center'}}>
            Capacité: 
           <Input style={style.inputcapacity}
            onChange={e => this.handleCapacity(e)}
            value={store.getState().capacity}
            type='number'
          />
        </label>
          <TvCheckbox />
          <RetroCheckbox/>
      </div>
    );
  }
}

export default RoomFilter 