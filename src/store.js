import { createStore } from 'redux'

const initialState = {
  choosenRoom: '',
  equipements: [],
  message: '',
  modalMessage: '',
  capacity: '',
  rooms: 'no rooms',
  reservation: {
    startHour: '',
    endHour: '',
    day: '',
  },
}

const reducer = (state, action) => {
  if (action.type === 'LOAD_ROOMS') {
    return {
      ...state, 
      rooms: action.rooms
    } 
  } else if (action.type === 'CLEAN_ROOMS') {
    return {
      ...state, 
      rooms: []
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
        endHour: action.hour
      }
    }  
  } else if (action.type === 'ADD_START_HOURS') {
    return {
      ...state,
      reservation: {
        ...state.reservation,
        startHour: action.hour
      }
    }
  } else if (action.type === 'ADD_ROOM') {
    return {
      ...state,
      choosenRoom: action.room
    }
  } else if (action.type === 'SHOW_MESSAGE') {
    return {
      ...state,
      message: action.message,
    }  
  } else if (action.type === 'SHOW_MODAL_MESSAGE') {
    return {
      ...state,
      modalMessage: action.message,
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
  cleanRooms: (rooms) => store.dispatch({ type: 'CLEAN_ROOMS'}),
  handleCheckbox: (equipement) => store.dispatch({ type: 'FILTER_EQUIPEMENT', equipement }),
  handleCapacity: (capacity) => store.dispatch({ type: 'FILTER_CAPACITY', capacity }),
  handleDay: (day) => store.dispatch({ type: 'ADD_DAY', day }),
  handleEndHour: (hour) => store.dispatch({ type: 'ADD_END_HOURS', hour }),
  handleStartHour: (hour) => store.dispatch({ type: 'ADD_START_HOURS', hour }),
  handleRoomReservation: (room) => store.dispatch({ type: 'ADD_ROOM', room }),
  showMessage: (message) => store.dispatch({ type: 'SHOW_MESSAGE', message }),
  showModalMessage: (message) => store.dispatch({ type: 'SHOW_MODAL_MESSAGE', message }),
}

export const store = createStore(reducer, initialState)

