import React, { Component } from 'react'
import './App.css'
import Home from './Home'
import Employees from './Employees'
import Schedules from './Schedules'
import AddPositions from './AddPositions'
import AddNewEmployees from './AddNewEmployees'
import QuikShiftAdd from './QuikShiftAdd'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Positions from './Positions'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="Header">
            <h1>
              <Link to="/home">ScheduleQuik</Link>
            </h1>
          </div>
          <div className="Tabs">
            <Link to="/home">HOME</Link>
            <Link to="/employees">EMPLOYEES</Link>
            <Link to="/positions">POSITIONS</Link>
            <Link to="/schedules">SCHEDULES</Link>
          </div>
          <div />
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/employees" component={Employees} />
          <Route path="/positions" component={Positions} />
          <Route path="/schedules" component={Schedules} />
          <Route path="/addpositions" component={AddPositions} />
          <Route path="/addnewemployees" component={AddNewEmployees} />
          <Route path="/quikshiftadd" component={QuikShiftAdd} />
          <Footer tagline="This is a footer" />
        </div>
      </Router>
    )
  }
}

export default App
