import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './Home'
import Employees from './Employees'
import Schedules from './Schedules'
import AddPositions from './AddPositions'
import EditPositions from './EditPositions'
import DeletePositions from './DeletePositions'
import AddNewEmployees from './AddNewEmployees'
import QuikShiftAdd from './QuikShiftAdd'
import QuikShiftEdit from './QuikShiftEdit'
import ClearDeleteSchedule from './ClearDeleteSchedule'

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
        <div />
        {/* <Home /> */}
        {/* <Employees /> */}
        {/* <Schedules /> */}
        {/* <AddPositions /> */}
        {/* <EditPositions /> */}
        {/* <DeletePositions /> */}
        {/* <AddNewEmployees /> */}
        <QuikShiftAdd />
        {/* <QuikShiftEdit /> */}
        {/* <ClearDeleteSchedule /> */}
      </div>
    )
  }
}

export default App
