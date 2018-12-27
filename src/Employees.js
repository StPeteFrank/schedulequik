import React, { Component } from 'react'

class Employees extends Component {
  render() {
    return (
      <div>
        <div className="CompanyName">
          <h2>ABC Company</h2>
          <h2>Employee List</h2>
        </div>
        <div className="AddEditTabs">
          <a href="#">ADD/EDIT POSITIONS</a>
          <a href="#">ADD NEW EMPLOYEE</a>
        </div>
      </div>
    )
  }
}

export default Employees
