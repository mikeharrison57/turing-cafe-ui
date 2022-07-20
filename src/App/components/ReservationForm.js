import React, { Component } from 'react'
import '../styles/ReservationForm.css';

class ReservationForm extends Component {
  state = {
      id: null,
      name: "",
      date: "",
      time: "",
      number: null
  }

  render() {
    return (
      <form>
        <input 
          type='text'
          placeholder='Name'
          name='name'
          // value={this.state.name}
          // onChange={event => this.handleChange(event)}
        />
        <input 
          type='text'
          placeholder='Date (mm/dd)'
          name='date'
          // value={this.state.date}
          // onChange={event => this.handleChange(event)}
        />
        <input 
          type='text'
          placeholder='Time (0:00)'
          name='time'
          // value={this.state.time}
          // onChange={event => this.handleChange(event)}
        />
        <input 
          type='text'
          placeholder='Number of Guests'
          name='number'
          // value={this.state.number}
          // onChange={event => this.handleChange(event)}
        />

        <button className='resy-button'>Make Reservation</button>
      </form>
    )
  }
}


export default ReservationForm;