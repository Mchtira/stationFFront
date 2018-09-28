import React, { Component } from 'react';
import ShowRoom from '../components/ShowRoom.js'
import RoomFilter from '../components/RoomFilter.js'
import { actions } from '../store.js'
import { loadRooms } from '../api.js'

const style = {
  rooms: {
    display: 'flex',
    flexDirection: 'raw',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },

}

class ShowRooms extends Component {
  componentDidMount () {
    loadRooms().then(actions.loadRooms)
  }

  render() {
    if (this.props.rooms) {
      return (
        <div style={style.background}>  
          <RoomFilter {...this.props}/>
          <div style={style.rooms}>
            {this.props.rooms.map(room => <ShowRoom key={ room.name } {... room}/>)}
          </div>
        </div>
      )
    }
    else return (<div>Loading..</div>)
  }
}

export default ShowRooms