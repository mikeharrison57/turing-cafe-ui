const fetchReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
    .then((res) => {
      if(res.ok) {
        return res.json()
      }
      throw Error(res.statusText)
    })
}

export {fetchReservations}