import React, { Component } from 'react'

class Home extends Component {
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
        <div>
          <div classname="CompanyName">
            <h2>ABC Company</h2>
            <h3>Welcome John Smith, Manager</h3>
          </div>
          <div className="NavButtons">
            <button>EMPLOYEES</button>
            <button>SCHEDULES</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
