import React, { Component } from 'react'

class Schedules extends Component {
  render() {
    return (
      <div>
        <div classname="CompanyName">
          <h2>ABC Company</h2>
          <h3>Schedules</h3>
        </div>
        <div className="DeleteTabs">
          <a href="#">CLEAR/DELETE</a>
        </div>
        <div className="ScheduleContainer">
          <table className="ScheduleTable">
            <tbody>
              <tr>
                <th />
                <th>Jan-21 Mon</th>
                <th>Jan-22 Tue</th>
                <th>Jan-23 Wed</th>
                <th>Jan-24 Thu</th>
                <th>Jan-25 Fri</th>
                <th>Jan-26 Sat</th>
                <th>Jan-27 Sun</th>
              </tr>
              <tr>
                <td>John Smith</td>
                <td href="#" />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <td>Ana Banana</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <td>Jennifer Zayne</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Schedules
