import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './Home'
import Employees from './Employees'
import Schedules from './Schedules'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">
          <h1>ScheduleQuik</h1>
        </div>
        <div className="Tabs">
          <a href="#">HOME</a>
          <a href="#">EMPLOYEES</a>
          <a href="#">SCHEDULES</a>
        </div>
        {/* <Home /> */}
        <Employees />
        {/* <Schedules /> */}
      </div>
    )
  }
}

export default App
