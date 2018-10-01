export const loadRooms = () => {
  return fetch('https://radiant-hamlet-85171.herokuapp.com/rooms')
    .then(rooms => rooms.json())
}

export const filterRooms = (filters) => {
  return (
  fetch('https://radiant-hamlet-85171.herokuapp.com/rooms/',
    {
      method: 'post',
      body: JSON.stringify(filters),
      headers: { 'Content-Type': 'application/json' },
    })
    .then(rooms => rooms.json())
  )
}

export const filterDate = (date) => {
    return (
    fetch('https://radiant-hamlet-85171.herokuapp.com/availableRooms/',
      {
        method: 'post',
        body: JSON.stringify(date),
        headers: { 'Content-Type': 'application/json' },
      })
      .then(rooms => rooms.json())
  )
}

export const sendReservation = (reservation) => {
    return (
    fetch('https://radiant-hamlet-85171.herokuapp.com/reserveRoom/',
      {
        method: 'post',
        body: JSON.stringify(reservation),
        headers: { 'Content-Type': 'application/json' },
      })
      .then(confirmation => confirmation.json())
  )
}


