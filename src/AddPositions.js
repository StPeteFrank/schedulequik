import React, { Component } from 'react'

class AddPositions extends Component {
  render() {
    return (
      <div>
        <h2>Add Positions</h2>
        <div className="AddPositionContainer">
          <section>
            <div className="AddButton">
              <p>New Positions</p> <button>Add</button>
            </div>
            <div>
              <input type="text" placeholder="Enter Position" />
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

export default AddPositions
