import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">
          <h1>ScheduleQuik</h1>
        </div>
        <div className="Tabs">
          <a href="#">Home</a>
          <a href="#">Employees</a>
          <a href="#">Schedules</a>
        </div>
        <div className="NavButtons">
          <button>Employees</button>
          <button>Schedules</button>
        </div>
      </div>
    )
  }
}

export default App
