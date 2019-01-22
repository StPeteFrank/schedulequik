import React, { Component } from 'react'
import axios from 'axios'
import config from './Config'
import { format } from 'date-fns'

class QuikShiftAdd extends Component {
  constructor(props) {
    super(props)
    if (
      this.props.location &&
      this.props.location.state &&
      this.props.location.state.shift
    ) {
      this.state = {
        inTime: this.props.location.state.shift.inTime,
        outTime: this.props.location.state.shift.outTime,
        employeesTableId: this.props.location.state.shift.employeesTableId,
        positionsTableId: this.props.location.state.shift.positionsTableId,
        allEmployees: [],
        allPositions: [],
        existingShift: this.props.location.state.shift
      }
    } else if (
      this.props.location &&
      this.props.location.state &&
      this.props.location.state.newShift
    ) {
      this.state = {
        inTime: format(
          new Date(this.props.location.state.newShift.date),
          'YYYY-MM-DDT09:00'
        ),
        outTime: format(
          new Date(this.props.location.state.newShift.date),
          'YYYY-MM-DDT17:00'
        ),
        employeesTableId: this.props.location.state.newShift.employeeId,
        positionsTableId: 0,
        allEmployees: [],
        allPositions: [],
        existingShift: null
      }
    } else {
      this.state = {
        allPositions: [],
        allEmployees: [],
        allShifts: [],
        employeesTableId: 0,
        positionsTableId: 0,
        existingShift: null
      }
    }
  }

  componentDidMount() {
    this.loadAllPositions()
    this.loadAllEmployees()
    this.loadAllShifts()
  }

  loadAllPositions = () => {
    axios.get(config.API_URL + '/positions').then(resp => {
      this.setState({
        allPositions: resp.data
      })
    })
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
  addShiftToApi = e => {
    e.preventDefault()
    // IF shift already exists, THEN update ELSE create
    // Previously (this.props.location.state.shift)
    if (this.state.existingShift) {
      axios
        .put(`${config.API_URL}/shifts/${this.props.location.state.shift.id}`, {
          inTime: this.state.inTime,
          outTime: this.state.outTime,
          employeesTableId: this.state.employeesTableId,
          positionsTableId: this.state.positionsTableId
        })
        .then(() => {
          window.location = '/schedules'
        })
    } else {
      axios
        .post(config.API_URL + '/shifts', {
          inTime: this.state.inTime,
          outTime: this.state.outTime,
          employeesTableId: this.state.employeesTableId,
          positionsTableId: this.state.positionsTableId
        })
        .then(() => {
          window.location = '/schedules'
        })
    }
  }
  handleDropDownChangePos = e => {
    this.setState({
      positionsTableId: e.target.value
    })
  }
  handleDropDownChangeEmp = e => {
    this.setState({
      employeesTableId: e.target.value
    })
  }
  handleChangeIn = e => {
    this.setState({
      inTime: e.target.value
    })
  }
  handleChangeOut = e => {
    this.setState({
      outTime: e.target.value
    })
  }

  deleteCurrentShift = () => {
    axios
      .delete(
        `${config.API_URL}/shifts/${this.props.location.state.shift.id}`,
        {
          headers: {
            contentType: 'application/json'
          }
        }
      )
      .then(() => (window.location = '/schedules'))
  }
  ///////////////////////////////////////////

  deleteCurrentEntireWeekShifts = () => {
    axios
      .delete(`${config.API_URL}/shifts`, {
        headers: {
          contentType: 'application/json'
        }
      })
      .then(() => (window.location = '/schedules'))
  }

  ////////////////////////////////////////////
  cancelButton = () => {
    window.location = '/schedules'
  }

  render() {
    return (
      <div>
        <h2>Quik Shift Add/Edit/Delete</h2>

        <div className="QuikShiftAddContainer">
          <section>
            <p>Make Your Selections</p>

            <div className="SelectAnEmployee">
              <select
                name="positionsTableId"
                onChange={this.handleDropDownChangeEmp}
                value={this.state.employeesTableId}
              >
                <option value="0">Select Employee</option>
                {this.state.allEmployees.map(employee => {
                  return (
                    <option value={employee.id} key={employee.id}>
                      {employee.firstName} {employee.lastName}
                    </option>
                  )
                })}
              </select>
            </div>

            <div className="SelectAPosition">
              <select
                name="positionsTableId"
                onChange={this.handleDropDownChangePos}
                value={this.state.positionsTableId}
              >
                <option value="0">Select Position</option>
                {this.state.allPositions.map(position => {
                  return (
                    <option value={position.id} key={position.id}>
                      {position.positionName}
                    </option>
                  )
                })}
              </select>
            </div>

            <div className="StartEndTimeInput">
              <p>Input Start Date and Time</p>
              <input
                type="datetime-local"
                name="InTime"
                value={this.state.inTime}
                onChange={this.handleChangeIn}
              />
              <p>Input Finish Date and Time</p>
              <input
                type="datetime-local"
                name="OutTime"
                value={this.state.outTime}
                onChange={this.handleChangeOut}
              />
            </div>
            <div className="QuikShiftAddButtons">
              <button onClick={this.addShiftToApi}>ADD SHIFT</button>
              <button onClick={this.cancelButton}>CANCEL</button>
              {this.state.existingShift && (
                <button onClick={this.deleteCurrentShift}>DELETE SHIFT</button>
              )}
            </div>
          </section>
        </div>

        <div>
          <h2>Delete Schedule</h2>
          <div className="ClearDeleteContainer">
            <section>
              <p>Delete Entire Current Week's Schedule?</p>
            </section>

            <section className="ClearDeleteButtons">
              <button onClick={this.deleteCurrentEntireWeekShifts}>
                DELETE SCHEDULE
              </button>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default QuikShiftAdd

{
  /* <div className="ApplyToDaysInput">
              <p>Apply to Days</p>
              <div className="QuikShiftAddDaysInput">
                <input type="checkbox" /> <label>Monday</label>
              </div>
              <div className="ListedPositions">
                <input type="checkbox" /> <label>Tuesday</label>
              </div>
              <div className="ListedPositions">
                <input type="checkbox" /> <label>Wednesday</label>
              </div>
              <div className="ListedPositions">
                <input type="checkbox" /> <label>Thursday</label>
              </div>
              <div className="ListedPositions">
                <input type="checkbox" /> <label>Friday</label>
              </div>
              <div className="ListedPositions">
                <input type="checkbox" /> <label>Saturday</label>
              </div>
              <div className="ListedPositions">
                <input type="checkbox" /> <label>Sunday</label>
              </div>
            </div> */
}
