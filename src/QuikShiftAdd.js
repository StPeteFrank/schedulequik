import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class QuikShiftAdd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allPositions: [],
      allEmployees: [],
      allShifts: []
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
    axios
      .post('https://localhost:5001/api/shifts', {
        positionsTableId: this.state.positionsTableId,
        employeesTableId: this.state.employeesTableId,
        inTime: this.state.inTime,
        outTime: this.state.outTime
      })
      .then(() => {
        this.loadAllShifts()
        this.setState({
          employeesTableId: '',
          positionsTableId: '',
          inTime: '',
          outTime: ''
        })
      })
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
      shiftsTableId: e.target.value
    })
  }
  handleChangeOut = e => {
    this.setState({
      shiftsTableId: e.target.value
    })
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
                placeholder="In Time"
                name="InTime"
                value={this.state.InTime}
                onChange={this.handleChangeIn}
              />
              <p>Input Finish Date and Time</p>
              <input
                type="datetime-local"
                placeholder="Out Time"
                name="OutTime"
                value={this.state.OutTime}
                onChange={this.handleChangeOut}
              />
            </div>

            {/* <div className="ApplyToDaysInput">
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
            </div> */}
            <div className="QuikShiftAddButtons">
              <button onClick={this.addShiftToApi}>ADD SHIFT</button>
              <div className="LinkBackButtons">
                <Link to="/schedules">CANCEL</Link>
              </div>
              <button>DELETE SHIFT</button>
            </div>
          </section>
        </div>
        {/* <div>
          <h2>Quik Shift Edit</h2>
          <div className="QuikShiftEditContainer">
            <section>
              <p>John Smith</p>
              <div className="PositionSelector">
                <option value="">Position</option>
                <select onChange="Select a Position" />
              </div>
              <div className="StartEndTimeInput">
                <p>Start</p>
                <input type="text" placeholder="In Time" />
                <p>Finish</p>
                <input type="text" placeholder="Out Time" />
              </div>
              <div className="QuikShiftEditButtons">
                <button>SAVE SHIFT</button>
                <button>DELETE SHIFT</button>
                <button>CANCEL</button>
              </div>
            </section>
          </div>
        </div> */}
        <div>
          <h2>Delete Schedule</h2>
          <div className="ClearDeleteContainer">
            <section>
              <p>Delete Entire Current Week's Schedule?</p>
            </section>

            <section className="ClearDeleteButtons">
              <button>DELETE</button>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default QuikShiftAdd
