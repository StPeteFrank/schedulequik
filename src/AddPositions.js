import React, { Component } from 'react'

class AddPositions extends Component {
  render() {
    return (
      <div>
        <h2>Add Positions</h2>
        <div className="AddPositionContainer">
          <section>
            <div className="AddButton">
              <p>New Positions</p> <button>ADD</button>
            </div>
            <div>
              <input type="text" placeholder="Enter Position" />
              {/* User inputs text of new postion and clicks Add button to post onto db (HttpPost). */}
              {/* Then newly put position appears under PositionsList section (httpGet). */}
            </div>
          </section>

          <section className="PositionsList">
            <div className="EditDeleteButton">
              <p>Positions</p> <button>EDIT/DELETE</button>
              {/* Edit/Delete button takes user to EditPositions view. */}
            </div>
            <li>Office Manager</li>
            <li>Developer</li>
            <li>Senior Developer</li>
            <li>CTO</li>
            {/* These are hard-coded and will need to get positions from db (HttpGet). */}
          </section>
        </div>
      </div>
    )
  }
}

export default AddPositions
