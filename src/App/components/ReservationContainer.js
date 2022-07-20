import React from 'react';
import ReservationCard from './ReservationCard'
import '../styles/ReservationContainer.css'

const ReservationContainer = ({ reservations }) => {
  const reservationCards = reservations.map((reservation) => {
    return <ReservationCard 
      id={reservation.id}
      key={reservation.id}
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