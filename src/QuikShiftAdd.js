import React, { Component } from 'react'

class QuikShiftAdd extends Component {
  render() {
    return (
      <div>
        <h2>Quik Shift Add</h2>
        <div className="QuikShiftAddContainer">
          <section>
            <p>John Smith</p>
            {/* "John Smith" needs to come from EmployeesTable db (HttpGet). */}
            <div className="SelectAPosition">
              <option value="">Select a Position</option>
              {/* This positions drop-down menu needs to come from PositionsTable db (HttpGet). */}
              <select onChange="Select a Position" />
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
          <h2>Clear/Delete Schedule</h2>
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
