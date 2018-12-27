import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div>
        <div classname="CompanyName">
          <h2>ABC Company</h2>
          <h2>Welcome John Smith, Manager</h2>
        </div>
        <div className="NavButtons">
          <button>EMPLOYESS</button>
          <button>SCHEDULES</button>
        </div>
      </div>
    )
  }
}

export default Home
