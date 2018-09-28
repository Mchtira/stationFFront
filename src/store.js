import { createStore } from 'redux'

const initialState = {
  equipements: [],
  capacity: 0,
  rooms: '',
  reservation: {
    startHour: '',
    endHour: '',
    day: '',
  }
}

const reducer = (state, action) => {
  console.log(state, action)
  if (action.type === 'LOAD_ROOMS') {
    return {
      ...state, 
      rooms: action.rooms
    } 
  } else if (action.type === 'FILTER_CAPACITY') {
    return {
      ...state,
      capacity: action.capacity
    }
  } else if (action.type === 'ADD_DAY') {
    return {
      ...state,
      reservation: {
        ...state.reservation,
        day: action.day
      }
    }  
  } else if (action.type === 'ADD_END_HOURS') {
    return {
      ...state,
      reservation: {
        ...state.reservation,
        endHour: action.hour}
    }  
  } else if (action.type === 'ADD_START_HOURS') {
    return {
      ...state,
      reservation: {
        ...state.reservation,
        startHour: action.hour}
    }
  } else if (action.type === 'FILTER_EQUIPEMENT') {
    let equipements = state.equipements
    if (state.equipements.includes(action.equipement))
      equipements = equipements.filter( equipement => equipement !== action.equipement)
    else
      equipements.push(action.equipement)
    return {
      ...state,
      equipements
    }
  }

  return state
}

export const actions = {
  loadRooms: (rooms) => store.dispatch({ type: 'LOAD_ROOMS', rooms }),
  handleCheckbox: (equipement) => store.dispatch({ type: 'FILTER_EQUIPEMENT', equipement }),
  handleCapacity: (capacity) => store.dispatch({ type: 'FILTER_CAPACITY', capacity }),
  handleDay: (day) => store.dispatch({ type: 'ADD_DAY', day}),
  handleEndHour: (hour) => store.dispatch({ type: 'ADD_END_HOURS', hour}),
  handleStartHour: (hour) => store.dispatch({ type: 'ADD_START_HOURS', hour}),
}

export const store = createStore(reducer, initialState)

