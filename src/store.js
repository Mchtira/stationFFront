import { createStore } from 'redux'

const initialState = {
  rooms: '',
  tv: false,
  retroprojecteur: false,
  capacity: 0,
  date: '',
}

const reducer = (state, action) => {
  console.log(state, action)
  if (action.type === 'LOAD_ROOMS') {
    return {
      ...state, 
      rooms: action.rooms.rooms
    } 
  }
  if (action.type === 'FILTER_EQUIPEMENT') {
    return {
      ...state,
      [action.equipement]: !state[action.equipement]
    }
  }
  if (action.type === 'FILTER_CAPACITY') {
    return {
      ...state,
      capacity: action.capacity
    }
  }
  if (action.type === 'FILTER_DATE') {
    return {
      ...state,
      date: action.date
    }
  }

  return state
}

export const actions = {
  loadRooms: (rooms) => store.dispatch({ type: 'LOAD_ROOMS', rooms }),
  handleCheckbox: (equipement) => store.dispatch({ type: 'FILTER_EQUIPEMENT', equipement }),
  handleCapacity: (capacity) => store.dispatch({ type: 'FILTER_CAPACITY', capacity }),
  handleDate: (date) => store.dispatch({ type: 'FILTER_DATE', date })
}

export const store = createStore(reducer, initialState)

