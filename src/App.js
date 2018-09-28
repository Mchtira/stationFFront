import React, { Component } from 'react';
import './App.css';
import Rooms from './containers/ShowRooms.js'
import ChooseDate from './containers/ChooseDate.js'
import { store } from './store.js'


const style = {
  maxWidth: '70%',
  margin: '0 auto',
  display: 'flex',  
  backgroundColor:'white',
  marginTop: '2%',
  width: '100%',
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
        <ChooseDate {...this.state}/>
      </div>
    );
  }
}

export default App;
