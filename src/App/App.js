import React, { Component } from 'react';
import './App.css';
import {fetchReservations} from './api-calls'
import ResevationContainer from './components/ReservationContainer';
import ReservationForm from './components/ReservationForm';

class App extends Component {
  state = {
    reservations: [],
    error: ''
  }

  componentDidMount() {
    fetchReservations()
      .then((data) => {
        this.setState({reservations: data})
      })
      .catch((error) => {
        this.setState({error: error.message})
      })
  }

  addReservation = (newReservation) => {
    this.setState({reservations:[
      ...this.state.reservations,
      newReservation
    ]})
  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <ReservationForm addReservation={this.addReservation} />
        </div>
        <ResevationContainer reservations={this.state.reservations} />
      </div>
    )
  }
}

export default App;
