import React, { Component } from 'react';
import { actions } from '../store.js'

class SelectDate extends Component {
  handleDate = (e) => {
    e.preventDefault()
  }
  handleDay = (e) => {
    actions.handleDay(e.target.value)
  }

  handleStartHour = (e) => {
    actions.handleStartHour(e.target.value)
  }

  handleEndHour = (e) => {
    actions.handleEndHour(e.target.value)
  }

  render() {
    return (
      <React.Fragment> 
        <form onSubmit={this.handleDate}>
          <div>
            Choisissez la date de reservation : <input onChange={this.handleDay} type='date'/>
          </div>
          <div> 
            ainsi que l'heure : de <input onChange={this.handleStartHour} type='time' /> 
            à <input onChange={this.handleEndHour} type='time' />
          </div>
          <input type='submit' />
        </form>
      </React.Fragment> 
    );
  }
}

export default SelectDate;
