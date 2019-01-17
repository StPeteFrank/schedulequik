import React, { Component } from 'react'
import axios from 'axios'

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
        allPositions: []
      }
    } else {
      this.state = {
        allPositions: [],
        allEmployees: [],
        allShifts: [],
        employeesTableId: 0,
        positionsTableId: 0
      }
    }
  }

  componentDidMount() {
    this.loadAllPositions()
    this.loadAllEmployees()
    this.loadAllShifts()
  }

  loadAllPositions = () => {
    axios.get('https://localhost:5001/api/positions').then(resp => {
      this.setState({
        allPositions: resp.data
      })
    })
  }
  loadAllEmployees = () => {
    axios.get('https://localhost:5001/api/employees').then(resp => {
      this.setState({
        allEmployees: resp.data
      })
    })
  }
  loadAllShifts = () => {
    axios.get('https://localhost:5001/api/shifts').then(resp => {
      this.setState({
        allShifts: resp.data
      })
    })
  }
  addShiftToApi = e => {
    e.preventDefault()
    // IF shift already exists, THEN update ELSE create
    if (
      this.props.location &&
      this.props.location.state &&
      this.props.location.state.shift.id
    ) {
      axios
        .put(
          `https://localhost:5001/api/shifts/${
            this.props.location.state.shift.id
          }`,
          {
            inTime: this.state.inTime,
            outTime: this.state.outTime,
            employeesTableId: this.state.employeesTableId,
            positionsTableId: this.state.positionsTableId
          }
        )
        .then(() => {
          window.location = '/schedules'
        })
    } else {
      axios
        .post('https://localhost:5001/api/shifts', {
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
              <button>DELETE SHIFT</button>
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
              <button>DELETE SCHEDULE</button>
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
