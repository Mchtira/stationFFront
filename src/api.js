export const loadRooms = () => {
  return fetch('http://localhost:4000/rooms')
    .then(rooms => rooms.json())
}

export const filterRooms = (filter) => {
  return (
  fetch(`http://localhost:4000/rooms/`,
    {
      method: 'post',
      body: JSON.stringify(filter),
      headers: { 'Content-Type': 'application/json' },
    })
  )
}