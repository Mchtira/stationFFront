export const loadRooms = () => {
  return fetch('http://localhost:4000/rooms')
    .then(rooms => rooms.json())
}

export const filterRooms = (filters) => {
  return (
  fetch(`http://localhost:4000/rooms/`,
    {
      method: 'post',
      body: JSON.stringify(filters),
      headers: { 'Content-Type': 'application/json' },
    })
    .then(rooms => rooms.json())
  )
}