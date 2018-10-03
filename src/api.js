export const filterRooms = (filters) => {
  return (
    window.fetch('http://localhost:4000/rooms/',
      {
        method: 'post',
        body: JSON.stringify(filters),
        headers: { 'Content-Type': 'application/json' }
      })
      .then(rooms => rooms.json())
  )
}

export const sendReservation = (reservation) => {
  return (
    window.fetch('http://localhost:4000/reserveRoom/',
      {
        method: 'post',
        body: JSON.stringify(reservation),
        headers: { 'Content-Type': 'application/json' }
      })
      .then(confirmation => confirmation.json())
  )
}
