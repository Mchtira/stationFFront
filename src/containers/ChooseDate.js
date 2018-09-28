import React, { Component } from 'react';
import { actions } from '../store.js'

class SelectDate extends Component {

  render() {
    return (
      <React.Fragment> 
        <div>
          Choisissez la date de reservation : <input type='date'/>
        </div>
        <div> 
          ainsi que l'heure : de <input type='time' /> à <input type='time' />
        </div>
        <input type='submit' />
      </React.Fragment> 
    );
  }
}

export default SelectDate;
