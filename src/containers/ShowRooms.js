import React, { Component } from 'react';
import ShowRoom from '../components/ShowRoom.js'
import RoomFilter from './RoomFilter.js'
import { Loader } from 'semantic-ui-react'

const style = {
  rooms: {
    border: 'solid grey 4px',
    borderRadius: '10px',
    display: 'flex',
    alignItems:'center',
    marginTop: '1%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
}

class ShowRooms extends Component {
  render() {
    if (this.props.rooms === 'no rooms') {
      return(<div></div>)
    } else if (this.props.rooms[0]) {
      return (
        <div>  
          <RoomFilter {...this.props}/>
          <div style={style.rooms}>
            {this.props.rooms.map(room => <ShowRoom key={ room.name } {... room}/>)}
          </div>
        </div>
      )
    } else {
      return (<div><Loader active/></div>)
    }
  }
}

export default ShowRooms