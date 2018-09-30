import React, { Component } from 'react';
import Reservation from './Reservation.js'

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

class ShowRoom extends Component {
  render() {
    console.log(this.props)
    return (
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
        : <div>Salle sans équipement</div>}
          <Reservation {...this.props}/>
      </div>
    );
  }
}

export default ShowRoom 