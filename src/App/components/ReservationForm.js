import React, { Component } from 'react'
import '../styles/ReservationForm.css';

class ReservationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id: '',
        name: "",
        date: "",
        time: "",
        number: 0
    }
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value}) 
    // console.log(this.props)
  }

  submitReservation = event => {
    event.preventDefault();
    const newReservation = {
      id: Date.now(),
      ...this.state
    }
    this.props.addReservation(newReservation)
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({
      id: '',
      name: "",
      date: "",
      time: "",
      number: ''
    })
  }

  render() {
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
          type='number'
          placeholder='Number of Guests'
          name='number'
          value={this.state.number}
          onChange={event => this.handleChange(event)}
        />

        <button className='resy-button' onClick={event => this.submitReservation(event)}>Make Reservation</button>
      </form>
    )
  }
}


export default ReservationForm;