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
                <input type="radio" /> <label>Monday</label>
              </div>
              <div className="ListedPositions">
                <input type="radio" /> <label>Tuesday</label>
              </div>
              <div className="ListedPositions">
                <input type="radio" /> <label>Wednesday</label>
              </div>
              <div className="ListedPositions">
                <input type="radio" /> <label>Thursday</label>
              </div>
              <div className="ListedPositions">
                <input type="radio" /> <label>Friday</label>
              </div>
              <div className="ListedPositions">
                <input type="radio" /> <label>Saturday</label>
              </div>
              <div className="ListedPositions">
                <input type="radio" /> <label>Sunday</label>
              </div>
            </div>
            <div className="QuikShiftAddButtons">
              <button>Add Shift</button>
              {/* Adds position, time, and days selected to the Schedules view. */}
              <button>Cancel</button>
              {/* After either of these buttons are clicked the user will be taken to the Schedules view. */}
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default QuikShiftAdd
