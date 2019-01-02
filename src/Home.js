import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div classname="CompanyName">
          <h2>ABC Company</h2>
          <h3>Welcome John Smith, Office Manager</h3>
        </div>
        <div className="NavButtons">
          <button>EMPLOYEES</button>
          {/* Employees button takes you Employees view. */}
          <button>SCHEDULES</button>
          {/* Schedules button takes you Schedules view. */}
        </div>
      </div>
    )
  }
}

export default Home
