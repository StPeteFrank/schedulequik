import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="CompanyName">
          <h2>ABC Company</h2>
          <h3>Welcome John Smith, Office Manager</h3>
        </div>
        <div className="NavButtons">
          <Link to="/employees" className="link">
            EMPLOYEES
          </Link>

          <Link to="/schedules" className="link">
            SCHEDULES
          </Link>
        </div>
      </div>
    )
  }
}

export default Home
