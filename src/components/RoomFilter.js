import React, { Component } from 'react';
import { actions } from '../store.js'
import { filterRooms } from '../api.js'

class RoomFilter extends Component {
  handleCheckbox = equipement => actions.handleCheckbox(equipement)
  handleCapacity = capacity => actions.handleCapacity(capacity)
  handleDate = date => actions.handleDate(date)
  sendForm = () => {
    const form = {
      capacity: this.props.capacity,
      date: this.props.date,
      equipements: {
        retroprojecteur: this.props.retroprojecteur,
        tv: this.props.tv,
      },
    }
    filterRooms(form)
  }

  render() {
    return (
      <div>
        <div>
          Capacité minimum : <input onChange={e => this.handleCapacity(e.target.value)} type='number'/>
        </div>
        <div>
          <input type='checkbox' onChange={() => this.handleCheckbox('tv')}/>
          <label>TV</label>
          <input type='checkbox' onChange={() => this.handleCheckbox('retroprojecteur')}/>
          <label>Rétro Projecteur</label>
        </div>
        <div>
          <input onChange={e => this.handleDate(e.target.value)} type='date'/>
        </div>
        <div>
          <button onClick={this.sendForm}>Filter</button>
        </div>
      </div>
    );
  }
}

export default RoomFilter 