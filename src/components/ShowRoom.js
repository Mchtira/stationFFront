import React, { Component } from 'react'
import Reservation from './Reservation.js'

const style = {
  reservation: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '15em',
    width: '33.33%',
    textAlign: 'center',
    padding: '2%'
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
    console.log(this.props)
    return (
      <div style={{ ...style.reservation, background: this.props.background }}>
        <div style={style.room}>
          <div><h3>{this.props.name}</h3></div>
          <br />
          <div><b>Capacité :</b> <br />{this.props.capacity} personnes</div>
          <div><b>Equipements :</b></div>
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
