import React, { Component } from 'react'

class Schedules extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <div classname="CompanyName">
            <h2>ABC Company</h2>
            <h3>Schedules</h3>
          </div>
          <div className="DeleteTabs">
            {/* This DeleteTabs will take user to the ClearDelete view. */}
            <a href="#">CLEAR/DELETE</a>
          </div>
          <div className="ScheduleContainer">
            {/* When user selects an empty cell from the Schedules view they will taken to the QuikShiftAdd view. */}
            {/* If they select a cell that already has a shift they will be taken to the QuikShiftEdit view. */}
            <table className="ScheduleTable">
              <tbody>
                <tr>
                  <th />
                  {/* Hard-coded but would be great to add a feature that keeps track of what week it is. */}
                  <th>Jan-21 Mon</th>
                  <th>Jan-22 Tue</th>
                  <th>Jan-23 Wed</th>
                  <th>Jan-24 Thu</th>
                  <th>Jan-25 Fri</th>
                  <th>Jan-26 Sat</th>
                  <th>Jan-27 Sun</th>
                </tr>
                <tr>
                  {/* The names of employees needs to come from the EmployeesTable db (HttpGet). */}
                  <td>John Smith</td>
                  <td href="#" />
                  <td href="#" />
                  <td href="#" />
                  <td href="#" />
                  <td href="#" />
                  <td href="#" />
                  <td href="#" />
                </tr>
                <tr>
                  <td>Ana Banana</td>
                  <td href="#" />
                  <td href="#" />
                  <td href="#" />
                  <td href="#" />
                  <td href="#" />
                  <td href="#" />
                  <td href="#" />
                </tr>
                <tr>
                  <td>Jennifer Zayne</td>
                  <td href="#" />
                  <td href="#" />
                  <td href="#" />
                  <td href="#" />
                  <td href="#" />
                  <td href="#" />
                  <td href="#" />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Schedules
