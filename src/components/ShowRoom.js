import React, { Component } from 'react';
import workingPlace from '../asset/workingPlace.jpeg'

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
  image: {
    objectFit: 'cover no-repeat',
    width : '100%',
    height: '25vh',
  }
}

class ShowRoom extends Component {
  render() {
    return (
      <div style={style.room}>
        <div><img style={style.image}src={workingPlace} alt={this.props.name}/></div>
        <div>{this.props.name}</div>
        <div>{this.props.description}</div>
        <div>Equipements : </div>
        {this.props.equipements[0]
        ? <div style={style.equipements}>
            {this.props.equipements.map(equipement => 
            <div key={equipement.name}>{equipement.name}</div>)}
          </div>
        : <div>Salle sans équipement</div>}
      </div>
    );
  }
}

export default ShowRoom 