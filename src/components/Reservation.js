import React, { Component } from 'react';
import { actions, store } from '../store.js'
import Modal from 'react-responsive-modal'
import { sendReservation } from '../api.js'

const style = {
  room: {
    marginTop: '1%',
    maxWidth: '200px',
    border: 'solid black 1px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: '1%',
    backgroundColor: 'white'
  },
  equipements: {
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    justifyContent: 'center',
  },
}

class Reservation extends Component {

  state = {
    open: false,
  }
 
  onOpenModal = () => {
    actions.handleRoomReservation(this.props.name)
    this.setState({ open: true })
  }
 
  onCloseModal = () => {
    actions.handleRoomReservation('')
    actions.showMessage('')
    this.setState({ open: false })
  }

  handleSubmit = () => {
    const reservation = { ...store.getState().reservation, name: store.getState().choosenRoom }
    sendReservation(reservation).then(message => actions.showMessage(message))
  }
 


  render() {
    return (
      <div>
        <button onClick={this.onOpenModal}>Reserver</button>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
          <div style={style.room}>
            <div>{this.props.name}</div>
            <div>{this.props.description}</div>
            <div>Capacité : {this.props.capacity}</div>
            <div>Equipements : </div>
            {this.props.equipements[0] === []
            ? <div style={style.equipements}>
                {this.props.equipements.map(equipement => 
                <div key={equipement.name}>{equipement.name}</div>)}
              </div>
            : <div>Salle sans équipement</div>}
            <p>{`Etes vous sur de vouloir reserver la ${this.props.name} le ${store.getState().reservation.day}
            de ${store.getState().reservation.startHour}
            à ${store.getState().reservation.endHour}`}</p>
            {store.getState().message ? <p>{store.getState().message}</p> : <p></p>} 
            <input type='button' value='confirmer' onClick={this.handleSubmit}/>
          </div>
        </Modal>
      </div>
    )
  }
}

export default Reservation 