import React, { Component } from 'react'

class DeletePositions extends Component {
  render() {
    return (
      <div>
        <h2>Delete Positions</h2>
        <div className="DeletePositionContainer">
          <section>
            <p>Positions</p>
            <div className="CurrentPositions">
              <input type="radio" />
              <label>Office Manager</label>
              <input type="radio" placeholder="Junior Developer" />
              <input type="radio" placeholder="Developer" />
              <input type="radio" placeholder="CTO" />
              {/* These input boxes need to come from the db of positions (http get) and need to be editable (http put). */}
            </div>
          </section>

          <section className="DeletePositionsButtons">
            <button>Save</button>
            <button>Delete</button>
            {/* Delete button takes you to DeletePosition view.
            Save button takes you back to AddPosition view. */}
          </section>
        </div>
      </div>
    )
  }
}

export default DeletePositions
