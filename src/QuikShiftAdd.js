import React, { Component } from 'react'

class QuikShiftAdd extends Component {
  render() {
    return (
      <div>
        <h2>Quik Shift Add</h2>
        <div className="QuikShiftAddContainer">
          <section>
            <p>John Smith</p>
            <div className="SelectAPosition">
              <option value="">Select a Position</option>
              <select onChange="Select a Position" />
            </div>
            <div className="StartEndTimeInput">
              <p>Start</p>
              <input type="text" placeholder="In Time" />
              <p>Finish</p>
              <input type="text" placeholder="Out Time" />
            </div>

            <div className="QuikShiftAddButtons">
              <button>Add Shift</button>
              <button>Cancel</button>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default QuikShiftAdd
