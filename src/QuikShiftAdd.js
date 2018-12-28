import React, { Component } from 'react'

class QuikShiftAdd extends Component {
  render() {
    return (
      <div>
        <h2>Quik Shift Add</h2>
        <div className="QuikShiftAddContainer">
          <section>
            <p>John Smith</p>
            <div className="CurrentPositions">
              <input type="text" placeholder="Office Manager" />
              <input type="text" placeholder="Junior Developer" />
              <input type="text" placeholder="Developer" />
              <input type="text" placeholder="CTO" />
            </div>
          </section>

          <section className="QuikShiftAddButtons">
            <button>Add Shift</button>
            <button>Cancel</button>
          </section>
        </div>
      </div>
    )
  }
}

export default QuikShiftAdd
