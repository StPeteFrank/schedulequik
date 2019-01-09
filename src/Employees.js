import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Employees extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <div className="CompanyName">
            <h2>ABC Company</h2>
            <h3>Employee List</h3>
          </div>
          <div className="AddEditTabs">
            <Link to="/addpositions">ADD/EDIT POSITIONS</Link>
            <Link to="/addnewemployees">ADD NEW EMPLOYEE</Link>
          </div>
          <div className="EmployeeContainer">
            {/* The EmployeeTable will come from EmployeesTable db (HttpGet). */}
            <table className="EmployeeTable">
              <tbody>
                <tr>
                  <th>FIRST</th>
                  <th>LAST</th>
                  <th>PHONE</th>
                  <th>EMAIL</th>
                </tr>
                <tr>
                  <td>John</td>
                  <td>Smith</td>
                  <td>727-111-2222</td>
                  <td>abc@zzz.com</td>
                </tr>
                <tr>
                  <td>Anna</td>
                  <td>Banana</td>
                  <td>727-333-4444</td>
                  <td>def@zzz.com</td>
                </tr>
                <tr>
                  <td>Jennifer</td>
                  <td>Zayne</td>
                  <td>727-555-6666</td>
                  <td>ghi@zzz.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Employees
