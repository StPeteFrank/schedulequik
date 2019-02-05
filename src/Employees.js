import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'
import config from './Config'
import Footer from './Footer'

class Employees extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allEmployees: []
    }
  }

  componentDidMount() {
    this.loadAllEmployees()
  }

  loadAllEmployees = () => {
    axios.get(config.API_URL + '/employees').then(resp => {
      this.setState({
        allEmployees: resp.data
      })
    })
  }

  render() {
    return (
      <div>
        <div className="App">
          <div className="CompanyName">
            <h2>ABC Company</h2>
            <h3>Employee List</h3>
          </div>
          <div className="AddEditTabs">
            <Link to="/addnewemployees">ADD / DELETE EMPLOYEES</Link>
          </div>
          <div className="EmployeeContainer">
            <table className="EmployeeTable">
              <tbody>
                <tr>
                  <th>FIRST</th>
                  <th>LAST</th>
                  <th>PHONE</th>
                  <th>EMAIL</th>
                </tr>
                {this.state.allEmployees.map(employee => {
                  return (
                    <tr>
                      <td>{employee.firstName}</td>
                      <td>{employee.lastName}</td>
                      <td>{employee.phoneNumber}</td>
                      <td>{employee.emailAddress}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Employees
