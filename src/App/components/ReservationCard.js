import React from 'react';

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
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}pm</p>
      <p>Number of Guests: {number}</p>
    </article>
  )
}

export default ReservationCard;