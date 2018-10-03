const apiUrl = 'https://radiant-hamlet-85171.herokuapp.com'

export const filterRooms = (filters) => {
  return (
    window.fetch(`${apiUrl}/rooms/`,
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
    window.fetch(`${apiUrl}/reserveRoom/`,
      {
        method: 'post',
        body: JSON.stringify(reservation),
        headers: { 'Content-Type': 'application/json' }
      })
      .then(confirmation => confirmation.json())
  )
}
