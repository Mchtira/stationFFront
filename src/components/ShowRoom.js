import React, { Component } from 'react'
import Reservation from './Reservation.js'

const style = {
  reservation: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: 'solid grey 4px',
    borderRadius: '10px',
    minWidth: '12em',
    minHeight: '12em',
    margin: '1%',
    textAlign: 'center'
  },
  roomInfo: {
    display: 'flex',
    flexDirection: 'column'
  },
  equipements: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  button: {
    marginBottom: '1%'
  }
}

class ShowRoom extends Component {
  render () {
    return (
      <div style={style.reservation}>
        <div style={style.room}>
          <div>{this.props.name}</div>
          <div>{this.props.description}</div>
          <div>Capacité : {this.props.capacity}</div>
          <div>Equipements : </div>
          {this.props.equipements[0]
            ? <div style={style.equipements}>
              {this.props.equipements.map(equipement =>
                <div key={equipement.name}>{equipement.name}</div>)}
            </div>
            : <div style={style.equipements}>Salle sans équipement</div>}
        </div>
        <div style={style.button}>
          <Reservation {...this.props} />
        </div>
      </div>
    )
  }
}

export default ShowRoom
