import React, { Component } from 'react'
import '../styles/ReservationForm.css';

class ReservationForm extends Component {
  state = {
      id: '',
      name: "",
      date: "",
      time: "",
      number: ''
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value}) 
  }

  render() {
    console.log(this.state.name)
    console.log(this.state.date)
    console.log(this.state.time)
    console.log(this.state.number)
    return (
      <form>
        <input 
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />
        <input 
          type='text'
          placeholder='Date (mm/dd)'
          name='date'
          value={this.state.date}
          onChange={event => this.handleChange(event)}
        />
        <input 
          type='text'
          placeholder='Time (0:00)'
          name='time'
          value={this.state.time}
          onChange={event => this.handleChange(event)}
        />
        <input 
          type='text'
          placeholder='Number of Guests'
          name='number'
          value={this.state.number}
          onChange={event => this.handleChange(event)}
        />

        <button className='resy-button'>Make Reservation</button>
      </form>
    )
  }
}


export default ReservationForm;