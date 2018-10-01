import React, { Component } from 'react';
import { actions } from '../store.js'
import { filterDate, loadRooms } from '../api.js'
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
    const { startHour, endHour, day } = date
    if (startHour, endHour, day && ![startHour, endHour, day].includes('')) {
      actions.loadRooms([])
      filterDate(date).then(actions.loadRooms)
      actions.showMessage('')
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
