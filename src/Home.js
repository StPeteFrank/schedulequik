import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div classname="CompanyName">
          <h2>ABC Company</h2>
          <h3>Welcome John Smith, Manager</h3>
        </div>
        <div className="NavButtons">
          <button>EMPLOYEES</button>
          <button>SCHEDULES</button>
        </div>
      </div>
    )
  }
}

export default Home
