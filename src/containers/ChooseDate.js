import React, { Component } from 'react';
import { actions } from '../store.js'
import { filterRooms } from '../api.js'
import { Button, Input } from 'semantic-ui-react'

const style = {
  component: {
    border: 'solid grey 4px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection:'column',
    alignItems:'center',
  },
  button: {
    marginLeft: '1%',
    marginRight: '1%',
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
    const date = this.props.reservation
    let { startHour, endHour, day } = date

    if (startHour, endHour, day && ![startHour, endHour, day].includes('')) {
      startHour = startHour.split(':').map(elem => Number(elem))
      endHour = endHour.split(':').map(elem => Number(elem))
      startHour = startHour[0] * 60 + startHour[1]
      endHour = endHour[0] * 60 + endHour[1]

      if (startHour > endHour) {
        actions.showMessage("La date n'est pas conforme")
      } else {
        filterRooms(date).then(actions.loadRooms)
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
        <form onSubmit={this.handleDate} style={style.form}>
            <div style={{padding: '1%'}}>Votre recherche</div>
            <div style={style.bar}>
              <Input style={style.button} onChange={this.handleDay} type='date'/> de
              <Input style={style.button} onChange={this.handleStartHour} type='time'/> à
              <Input style={style.button} onChange={this.handleEndHour} type='time'/>
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
