import React from 'react';
import ReservationCard from './ReservationCard'

const ReservationContainer = ({ reservations }) => {
  const reservationCards = reservations.map((reservation) => {
    return <ReservationCard 
      id={reservation.id}
      key={reservation.key}
      name={reservation.name}
      date={reservation.date}
      time={reservation.time}
      number={reservation.number}
    />
  })

  return (
    <div className='resy-container'>
      {reservationCards}
    </div>
  )
}

export default ReservationContainer;