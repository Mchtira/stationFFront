import React, { Component } from 'react'
import ShowRoom from '../components/ShowRoom.js'
import RoomFilter from './RoomFilter.js'
import { Loader, Dimmer } from 'semantic-ui-react'
import { store } from '../store.js'
import './showRooms.css'

const style = {
  rooms: {
    minHeight: '15em',
    border: 'solid black 2px',
    background: 'white',
    display: 'flex',
    alignItems: 'center',
    marginTop: '1%',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  dimmer: {
    border: 'solid black 2px',
    marginTop: '1%',
    position: 'relative',
    height: '15em'
  }
}

class ShowRooms extends Component {
  render () {
    if (this.props.rooms === 'no rooms') {
      return (
        <div />
      )
    } else if (this.props.rooms === 'Aucune salle disponible') {
      return (
        <div>
          <RoomFilter {...this.props} />
          <div style={style.rooms}>{this.props.rooms}</div>
        </div>
      )
    } else if (this.props.rooms[0]) {
      return (
        <div>
          <RoomFilter {...this.props} />
          <div style={style.rooms}>
            {this.props.rooms.map((room, index) => {
              room.background = index % 2 === 0 ? 'lightgrey' : 'white'
              return <ShowRoom key={room.name} {... room} />
            })}
          </div>
        </div>
      )
    } else if (!store.getState().message) {
      return (
        <div>
          <RoomFilter {...this.props} />
          <Dimmer style={style.dimmer}active inverted><Loader /></Dimmer>
        </div>
      )
    } else return <div />
  }
}

export default ShowRooms
