import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class AddNewEmployees extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allEmployees: []
    }
  }

  addEmployeeToApi = e => {
    e.preventDefault()
    axios
      .post('https://localhost:5001/api/employees', {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phoneNumber: this.state.phoneNumber,
        emailAddress: this.state.emailAddress
      })
      .then(response => {
        //TODO: redirect to /employees using react router (or vanilla js)
      })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>Add New Employees</h2>
        <div className="AddNewEmployeeContainer">
          <section className="AddNewEmployee">
            <div className="AddNewName">
              <p>Name</p>
            </div>
            <div className="InputName">
              <div>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  name="firstName"
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  name="lastName"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="AddNewPhone">
              <p>Phone</p>
            </div>
            <div className="InputPhone">
              <input
                type="text"
                placeholder="Enter Phone Number"
                name="phoneNumber"
                onChange={this.handleChange}
              />
            </div>

            <div className="AddNewEmail">
              <p>Email</p>
            </div>
            <div className="InputEmail">
              <input
                type="text"
                placeholder="Enter Email Address"
                name="emailAddress"
                onChange={this.handleChange}
              />
            </div>

            <div className="AddNewEmployeeButton">
              <button onClick={this.addEmployeeToApi}>ADD NEW EMPLOYEE</button>
              {/* Once AddNewEmployeeButton is clicked the new employee will be saved and
              appear on the Employees view. The user will be taken back to the Employees view page. */}
            </div>
          </section>
        </div>

        <h2>Delete Employees</h2>
        <div className="DeleteEmployeeContainer">
          <section className="DeleteEmployee">
            {/* These inputs will need to add data to EmployeesTable db (HttpPut). */}
            {/* Then later be displayed on the Employees view (HttpGet). */}

            <p>Select Employees</p>
            {/* These hard-coded Select Positions inputs will come from PositionsTable db (HttpGet). */}
            {/* Once they are selected they will add to EmployeePositionsTable (HttpPut). */}
            {/* {this.state.allEmployees.map(employee => {
                  return ( */}
            <div className="ListedPositions">
              <input type="checkbox" /> <label>Hardcoded Harry</label>
            </div>
            <div className="ListedPositions">
              <input type="checkbox" /> <label>Jane Doe</label>
            </div>
            <div className="ListedPositions">
              <input type="checkbox" /> <label>Jennifer Zayne</label>
            </div>
            <div className="ListedPositions">
              <input type="checkbox" /> <label>Joe Banana</label>
            </div>
            <div className="AddNewEmployeeButton">
              <button onClick={this.deleteEmployeeFromApi}>
                DELETE EMPLOYEE
              </button>
              {/* Once AddNewEmployeeButton is clicked the new employee will be saved and
              appear on the Employees view. The user will be taken back to the Employees view page. */}
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default AddNewEmployees
