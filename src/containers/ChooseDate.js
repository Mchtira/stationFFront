import React, { Component } from 'react';
import { actions, store } from '../store.js'
import { filterRooms } from '../api.js'
import { Button, Input } from 'semantic-ui-react'

const style = {
  component: {
    border: 'solid black 2px',
    background: 'white',
    display: 'flex',
    flexDirection:'column',
    alignItems:'center',
    padding: '2%',
  },
  inputs: {
    margin: '2%',
  },
  bar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
}

class SelectDate extends Component {
  handleDate = (e) => {
    e.preventDefault()
    actions.cleanRooms()
    const filters = {
      equipements: store.getState().equipements,
      capacity: store.getState().capacity,
      ...store.getState().reservation
    }
    let { startHour, endHour, day } = filters

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

  handleDay = (e) => actions.handleDay(e.target.value)

  handleStartHour = (e) => actions.handleStartHour(e.target.value)

  handleEndHour = (e) => actions.handleEndHour(e.target.value)
  
  render() {
    return (
      <div style={style.component}>
        <h2>Réservation de salle</h2>
        <form onSubmit={this.handleDate} style={style.form}>
            <div style={style.bar}>
              <Input style={style.inputs} onChange={this.handleDay} type='date'/> de
              <Input style={style.inputs} onChange={this.handleStartHour} type='time'/> à
              <Input style={style.inputs} onChange={this.handleEndHour} type='time'/>
            </div>
            <div style={{padding: '1%'}}>
              {this.props.message 
                ? <div>{this.props.message}</div> 
                : '' }
              <Button content='Valider' color='blue'/>
            </div>
        </form>
      </div>
    );
  }
}

export default SelectDate;
