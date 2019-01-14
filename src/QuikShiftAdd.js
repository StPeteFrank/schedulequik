import React, { Component } from 'react'
import axios from 'axios'

class QuikShiftAdd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allPositions: [],
      allEmployees: []
    }
  }

  componentDidMount() {
    this.loadAllPositions()
    this.loadAllEmployees()
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

  handleDropDownChange = e => {
    this.setState({
      positionsTableId: e.target.value
    })
  }

  handleDropDownChangeEmp = e => {
    this.setState({
      employeesTableId: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>Quik Shift Add</h2>

        <div className="QuikShiftAddContainer">
          <section>
            <p>Make Your Selections</p>

            <div className="SelectAnEmployee">
              <select
                name="positionsTableId"
                onChange={this.handleDropDownChangeEmp}
              >
                <option value="0">Select an Employee</option>
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
                onChange={this.handleDropDownChange}
              >
                <option value="0">Select a Position</option>
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
              <p>Start</p>
              <input type="text" placeholder="In Time" />
              <p>Finish</p>
              <input type="text" placeholder="Out Time" />
              {/* These inputed In/Out Times will display on the schedule. */}
            </div>

            <div className="ApplyToDaysInput">
              {/* This Apply to Days option will allow the user to populate multiple day with 
            positions and in/out times. */}
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
            </div>
            <div className="QuikShiftAddButtons">
              <button>ADD SHIFT</button>
              {/* Adds position, time, and days selected to the Schedules view. */}
              <button>CANCEL</button>
              {/* After either of these buttons are clicked the user will be taken to the Schedules view. */}
            </div>
          </section>
        </div>
        <div>
          <h2>Quik Shift Edit</h2>
          <div className="QuikShiftEditContainer">
            {/* This QuikShiftEditContainer will allow user to edit an already scheduled shift by clicking on that cell in Schedules view. */}
            <section>
              <p>John Smith</p>
              {/* "John Smith" needs to come from EmployeesTable db (HttpGet). */}
              <div className="PositionSelector">
                <option value="">Position</option>
                {/* This positions drop-down menu needs to come from EmployeePositionsTable db (HttpGet). */}
                <select onChange="Select a Position" />
              </div>
              <div className="StartEndTimeInput">
                <p>Start</p>
                <input type="text" placeholder="In Time" />
                <p>Finish</p>
                <input type="text" placeholder="Out Time" />
                {/* These inputed In/Out Times will display on the Schedules view. */}
              </div>
              <div className="QuikShiftEditButtons">
                <button>SAVE SHIFT</button>
                {/* Adds position, time, and days selected to the Schedules view. */}
                <button>DELETE SHIFT</button>
                {/* Removes added shift from the Schedules view. */}
                <button>CANCEL</button>
                {/* After any of these buttons are clicked the user will be taken to the Schedules view. */}
              </div>
            </section>
          </div>
        </div>
        <div>
          <h2>Delete Schedule</h2>
          <div className="ClearDeleteContainer">
            <section>
              <p>Delete Schedule?</p>
            </section>

            <section className="ClearDeleteButtons">
              <button>CLEAR WEEK</button>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default QuikShiftAdd
