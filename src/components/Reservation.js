import React, { Component } from 'react';
import { actions, store } from '../store.js'
import Modal from 'react-responsive-modal'
import { sendReservation } from '../api.js'
import { Button } from 'semantic-ui-react'
import { prettyDate } from '../prettyDate.js'

const style = {
  room: {
    marginTop: '1%',
    minWidth: '25em',
    minHeight: '15em',
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    margin: '1%',
    backgroundColor: 'white'
  },
  equipements: {
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  }
}

class Reservation extends Component {
  state = {
    open: false,
  }
 
  onOpenModal = () => {
    actions.showMessage('')
    actions.handleRoomReservation(this.props.name)
    this.setState({ open: true })
  }
 
  onCloseModal = () => {
    actions.showModalMessage('')
    actions.handleRoomReservation('')
    this.setState({ open: false })
  }

  handleSubmit = () => {
    const reservation = { 
      ...store.getState().reservation,
      name: store.getState().choosenRoom
    }
    sendReservation(reservation)
      .then(message => actions.showModalMessage(message))
  }

  render() {
    return (
      <div>
        <Button compact onClick={this.onOpenModal} color='black' content='Reserver'/>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
          <div style={style.room}>
          <div><h3>{this.props.name}</h3></div>
          <br />
            <div>{this.props.description}</div>
          <div><b>Capacité :</b></div>
          <div>{this.props.capacity} personnes</div>
          <div><b>Equipements :</b></div>
            {this.props.equipements[0]
            ? <div style={style.equipements}>
                {this.props.equipements.map(equipement => 
                <div key={this.props.name + equipement.name}>{equipement.name}</div>)}
              </div>
            : <div>Salle sans équipement</div>}
            <br />
            {store.getState().modalMessage 
            ? <div style={style.text}>{store.getState().modalMessage}</div> 
            : <div style={style.text}><b>{`Reserver la ${store.getState().choosenRoom}`}
                <br /> {`le ${prettyDate(store.getState().reservation.day)} de ${store.getState().reservation.startHour}
                à ${store.getState().reservation.endHour} ?`}</b></div>} 
            <br />
            <Button content='Confirmer' color='blue' onClick={this.handleSubmit}/>
          </div>
        </Modal>
      </div>
    )
  }
}

export default Reservation 