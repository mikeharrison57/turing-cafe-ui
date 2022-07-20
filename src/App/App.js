import React, { Component } from 'react';
import './App.css';
import {fetchReservations} from './api-calls'

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


  render() {
    console.log(this.state.reservations)
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;
