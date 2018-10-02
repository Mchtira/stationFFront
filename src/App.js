import React, { Component } from 'react'
import './App.css'
import ShowRooms from './containers/ShowRooms.js'
import ChooseDate from './containers/ChooseDate.js'
import { store } from './store.js'

let screenHeight = window.innerHeight
let appHeight = screenHeight / 100 * 95

const style = {
  maxWidth: '70%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
  marginTop: '1%',
  padding: '2%',
  minHeight: appHeight
}

class App extends Component {
  constructor () {
    super()
    this.state = store.getState()
    store.subscribe(() => this.setState(store.getState()))
  }

  render () {
    return (
      <div style={style}>
        <ChooseDate {...this.state} />
        <ShowRooms {...this.state} />
      </div>
    )
  }
}

export default App
