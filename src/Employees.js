import React, { Component } from 'react'

class Employees extends Component {
  render() {
    return (
      <div>
        <div className="CompanyName">
          <h2>ABC Company</h2>
          <h3>Employee List</h3>
        </div>
        <div className="AddEditTabs">
          <a href="#">ADD/EDIT POSITIONS</a>
          <a href="#">ADD NEW EMPLOYEE</a>
        </div>
        <div className="EmployeeTable">
          <table className="EmployeeCells">
            <tbody>
              <tr>
                <th>FIRST</th>
                <th>LAST</th>
                <th>PHONE</th>
                <th>EMAIL</th>
              </tr>
              <tr>
                <td>Jill</td>
                <td>Smith</td>
                <td>727-111-2222</td>
                <td>abc@zzz.com</td>
              </tr>
              <tr>
                <td>Eve</td>
                <td>Jackson</td>
                <td>727-333-4444</td>
                <td>abc@zzz.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Employees
