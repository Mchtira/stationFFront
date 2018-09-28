import React, { Component } from 'react';
import { actions } from '../store.js'
import { filterRooms } from '../api.js'

class RoomFilter extends Component {
  handleCheckbox = equipement => actions.handleCheckbox(equipement)
  handleCapacity = capacity => actions.handleCapacity(capacity)
  handleDate = date => actions.handleDate(date)
  sendForm = () => {
    const form = {
      equipements: this.props.equipements,
      capacity: this.props.capacity,
      date: this.props.date,
    }
    filterRooms(form).then(actions.loadRooms)
  }

  render() {
    return (
      <div>
        <form onSubmit={e => e.preventDefault()}>
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
            <input onChange={e => this.handleDate(e.target.value)} type='date'/>
          </div>
          <div>
            <button onClick={this.sendForm}>Filter</button>
          </div>
        </form>
      </div>
    );
  }
}

export default RoomFilter 