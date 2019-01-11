import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

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
      .post('https://localhost:5001/api/employees', {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phoneNumber: this.state.phoneNumber,
        emailAddress: this.state.emailAddress
      })
      .then(this.loadAllEmployees())
  }

  deleteEmployeeFromApi = () => {
    axios
      .delete('https://localhost:5001/api/employees/firstname')
      .then(this.loadAllEmployees())
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  loadAllEmployees = () => {
    axios.get('https://localhost:5001/api/employees').then(resp => {
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
            </div>
          </section>
        </div>

        <h2>Delete Employees</h2>
        <div className="DeleteEmployeeContainer">
          <section className="DeleteEmployee">
            <p>Select Employees</p>
            {this.state.allEmployees.map(employee => {
              return (
                <div className="ListedPositions">
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
              <button onClick={this.deleteEmployeeFromApi}>
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
