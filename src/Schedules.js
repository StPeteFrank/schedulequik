import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'
import { format } from 'date-fns'
import ScheduleCell from './Components/ScheduleCell'
import config from './Config'

class Schedules extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allEmployees: [],
      allShifts: []
    }
  }

  componentDidMount() {
    this.loadAllEmployees()
    this.loadAllShifts()
  }

  loadAllEmployees = () => {
    axios.get(config.API_URL + '/employees').then(resp => {
      this.setState({
        allEmployees: resp.data
      })
    })
  }

  loadAllShifts = () => {
    axios.get(config.API_URL + '/shifts').then(resp => {
      this.setState({
        allShifts: resp.data
      })
    })
  }
  doesEmployeeHaveShift = (employeeId, date) => {
    let rv = (
      <Link
        className="OffCells"
        to={{
          pathname: '/quikshiftadd',
          state: {
            newShift: {
              employeeId,
              date
            }
          }
        }}
      >
        OFF
      </Link>
    )
    // check each shift, and if that shift.employeeid == employeeid, return yes,
    for (let i = 0; i < this.state.allShifts.length; i++) {
      const shift = this.state.allShifts[i]
      if (shift.employeesTableId === employeeId) {
        // check if the the current shift is on the date passed
        if (date.toDateString() === new Date(shift.inTime).toDateString()) {
          // TODO : create and return a component that is responsible  for displaying the shift data
          return <ScheduleCell shift={shift} />
        }
      }
    }
    //else return no
    return rv
  }
  render() {
    return (
      <div>
        <div className="App">
          <div classname="CompanyName">
            <h2>ABC Company</h2>
            <h3>Schedules</h3>
            <h4>Click on any day to add, edit, or delete shifts.</h4>
          </div>
          <div className="DeleteTabs">
            <Link to="/quikshiftadd">ADD / EDIT / DELETE SHIFTS</Link>
          </div>
          <div className="ScheduleContainer">
            <table className="ScheduleTable">
              <tbody>
                <tr>
                  <th />
                  {/* Hard-coded but would be great to add a feature that keeps track of what week it is. */}
                  <th>Mon Jan-21</th>
                  <th>Tue Jan-22</th>
                  <th>Wed Jan-23</th>
                  <th>Thu Jan-24</th>
                  <th>Fri Jan-25</th>
                  <th>Sat Jan-26</th>
                  <th>Sun Jan-27</th>
                </tr>
                {this.state.allEmployees.map(employee => {
                  return (
                    <tr>
                      <td>
                        {employee.firstName} {employee.lastName}
                      </td>
                      <td className="Workday">
                        {this.doesEmployeeHaveShift(
                          employee.id,
                          new Date(2019, 0, 21)
                        )}
                      </td>
                      <td className="Workday">
                        {this.doesEmployeeHaveShift(
                          employee.id,
                          new Date(2019, 0, 22)
                        )}
                      </td>
                      <td className="Workday">
                        {this.doesEmployeeHaveShift(
                          employee.id,
                          new Date(2019, 0, 23)
                        )}
                      </td>
                      <td className="Workday">
                        {this.doesEmployeeHaveShift(
                          employee.id,
                          new Date(2019, 0, 24)
                        )}
                      </td>
                      <td className="Workday">
                        {this.doesEmployeeHaveShift(
                          employee.id,
                          new Date(2019, 0, 25)
                        )}
                      </td>
                      <td className="Workday">
                        {this.doesEmployeeHaveShift(
                          employee.id,
                          new Date(2019, 0, 26)
                        )}
                      </td>
                      <td className="Workday">
                        {this.doesEmployeeHaveShift(
                          employee.id,
                          new Date(2019, 0, 27)
                        )}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          {/* <div>
            {this.state.allShifts.map(shift => {
              return (
                <ul>
                  <li>{shift.inTime}</li>
                  <li>{shift.outTime}</li>
                  <li>{shift.positions.positionName}</li>
                </ul>
              )
            })}
          </div> */}
        </div>
      </div>
    )
  }
}

export default Schedules
