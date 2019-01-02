import React, { Component } from 'react'

class ClearDeleteSchedule extends Component {
  render() {
    return (
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
    )
  }
}

export default ClearDeleteSchedule
