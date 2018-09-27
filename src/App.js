import React, { Component } from 'react';
import './App.css';
import Rooms from './containers/ShowRooms.js'
import { store } from './store.js'


const style = {
  width: '70%',
  margin: '0 auto',
  display: 'flex',
}

class App extends Component {
  constructor() {
    super()
    this.state = store.getState()
    store.subscribe(() => this.setState(store.getState()))
  }

  render() {
    return (
      <div style={style}>
        <Rooms {...this.state}/>
      </div>
    );
  }
}

export default App;
