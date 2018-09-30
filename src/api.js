export const loadRooms = () => {
  return fetch('http://localhost:4000/rooms')
    .then(rooms => rooms.json())
}

export const filterRooms = (filters) => {
  return (
  fetch('http://localhost:4000/rooms/',
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
    fetch('http://localhost:4000/availableRooms/',
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
    fetch('http://localhost:4000/reserveRoom/',
      {
        method: 'post',
        body: JSON.stringify(reservation),
        headers: { 'Content-Type': 'application/json' },
      })
      .then(confirmation => confirmation.json())
  )
}


