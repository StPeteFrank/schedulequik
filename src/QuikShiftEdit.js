import React, { Component } from 'react'

class QuikShiftEdit extends Component {
  render() {
    return (
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
              <button>Save Shift</button>
              {/* Adds position, time, and days selected to the Schedules view. */}
              <button>Delete Shift</button>
              {/* Removes added shift from the Schedules view. */}
              <button>Cancel</button>
              {/* After any of these buttons are clicked the user will be taken to the Schedules view. */}
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default QuikShiftEdit
