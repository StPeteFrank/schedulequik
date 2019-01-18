import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import config from './Config'

class AddNewEmployees extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allEmployees: [],
      deleteEmployee: [],
      employeeIDsSelectedForDelete: []
    }
  }

  componentDidMount() {
    this.loadAllEmployees()
  }

  addEmployeeToApi = e => {
    e.preventDefault()
    axios
      .post(config.API_URL + '/employees', {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phoneNumber: this.state.phoneNumber,
        emailAddress: this.state.emailAddress
      })
      .then(() => {
        window.location.href = '/employees'
      })
  }

  deleteEmployeeFromApi = () => {
    axios
      .delete(config.API_URL + '/firstname')
      .then(() => this.loadAllEmployees())
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  loadAllEmployees = () => {
    axios.get(config.API_URL + '/employees').then(resp => {
      this.setState({
        allEmployees: resp.data
      })
    })
  }

  _selectEmployeeForDeletion = event => {
    const selectedEmployeeID = event.target.value

    if (this.state.employeeIDsSelectedForDelete.includes(selectedEmployeeID)) {
      // remove that id from the array
      const newIDs = this.state.employeeIDsSelectedForDelete.filter(
        id => id != selectedEmployeeID
      )

      this.setState({ employeeIDsSelectedForDelete: newIDs })
    } else {
      // Make a list of new IDs with the selected ID appended
      const newIDs = this.state.employeeIDsSelectedForDelete.concat([
        selectedEmployeeID
      ])

      this.setState({ employeeIDsSelectedForDelete: newIDs })
    }
  }

  deleteSelectedEmployees = () => {
    // DELETE request to the API
    // Update state with latest employee list
    axios
      .delete(config.API_URL + '/employees/list', {
        headers: {
          contentType: 'application/json'
        },
        data: {
          employeeIds: this.state.employeeIDsSelectedForDelete
        }
      })
      .then(() => this.loadAllEmployees())
    window.location = '/employees'
  }
  cancelButton = () => {
    window.location = '/employees'
  }

  render() {
    return (
      <div>
        <h2>Add New Employees</h2>
        <div className="AddNewEmployeeContainer">
          <section className="AddNewEmployee">
            <p>Name</p>
            <div className="InputName">
              <div>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
              </div>
              <div className="InputName" />
              <div>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  name="lastName"
                  value={this.state.lastName}
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
                value={this.state.phoneNumber}
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
                value={this.state.emailAddress}
                onChange={this.handleChange}
              />
            </div>

            <div className="AddNewEmployeeButton">
              <button onClick={this.addEmployeeToApi}>ADD EMPLOYEE</button>
              <button onClick={this.cancelButton}>CANCEL</button>
            </div>
          </section>
        </div>

        <h2>Delete Employees</h2>
        <div className="DeleteEmployeeContainer">
          <section className="DeleteEmployee">
            <p>Select Employees</p>
            {this.state.allEmployees.map(employee => {
              return (
                <div className="ListedPositions" key={employee.id}>
                  <input
                    className="DeleteCheckbox"
                    type="checkbox"
                    value={employee.id}
                    onClick={this._selectEmployeeForDeletion}
                  />
                  <label>
                    {employee.firstName} {employee.lastName}
                  </label>
                </div>
              )
            })}
            <div className="AddNewEmployeeButton">
              <button onClick={this.deleteSelectedEmployees}>
                DELETE EMPLOYEE
              </button>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default AddNewEmployees
