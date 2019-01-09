import React, { Component } from 'react'
import './App.css'
import Home from './Home'
import Employees from './Employees'
import Schedules from './Schedules'
import AddPositions from './AddPositions'
import AddNewEmployees from './AddNewEmployees'
import QuikShiftAdd from './QuikShiftAdd'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import axios from 'axios'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* This Header and Tabs will be on every view of this app. It serves as directory. */}
          <div className="Header">
            <h1>ScheduleQuik</h1>
          </div>
          <div className="Tabs">
            <Link to="/home">HOME</Link>
            <Link to="/employees">EMPLOYEES</Link>
            <Link to="/schedules">SCHEDULES</Link>
          </div>
          <div />
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/employees" component={Employees} />
          <Route path="/schedules" component={Schedules} />
          <Route path="/addpositions" component={AddPositions} />
          <Route path="/addnewemployees" component={AddNewEmployees} />
          <Route path="/quikshiftadd" component={QuikShiftAdd} />
        </div>
      </Router>
    )
  }
}

export default App
