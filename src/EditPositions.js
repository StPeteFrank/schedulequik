import React, { Component } from 'react'

class EditPositions extends Component {
  render() {
    return (
      <div>
        <h2>Edit Positions</h2>
        <div className="AddPositionContainer">
          <section>
            <div className="AddButton">
              <p>Positions</p> <button>Save</button>
            </div>
            <div className="CurrentPositions">
              <input type="text" placeholder="Office Manager" />
              <input type="text" placeholder="Junior Developer" />
              <input type="text" placeholder="Developer" />
              <input type="text" placeholder="CTO" />
              {/* These input boxes need to come from the db of positions and need to be editable (http put). */}
            </div>
          </section>

          <section className="PositionsList">
            <div className="EditDeleteButton">
              <p>Positions</p> <button>Edit/Delete</button>
            </div>
            <li>Office Manager</li>
            <li>Developer</li>
            <li>Senior Developer</li>
            <li>CTO</li>
          </section>
        </div>
      </div>
    )
  }
}

export default EditPositions
