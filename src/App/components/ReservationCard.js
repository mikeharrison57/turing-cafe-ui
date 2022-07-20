import React from 'react';
import '../styles/ReservationCard.css'

const ReservationCard = (props) => {
  const { 
    id,
    name,
    date,
    time,
    number
  } = props 
  return (
    <article className='resy-card'>
      <h3 className='name-input'>{name}</h3>
      <p className='date-input'>{date}</p>
      <p className='time-input'>{time}pm</p>
      <p className='guests-input'>Number of Guests: {number}</p>
      <button className='cancel-button'>Cancel</button>
    </article>
  )
}

export default ReservationCard;