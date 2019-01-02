import React, { Component } from 'react'

class EditPositions extends Component {
  render() {
    return (
      <div>
        <h2>Edit Positions</h2>
        <div className="EditPositionContainer">
          <section>
            <p>Positions</p>
            <div className="CurrentPositions">
              <input type="text" placeholder="Office Manager" />
              <input type="text" placeholder="Junior Developer" />
              <input type="text" placeholder="Developer" />
              <input type="text" placeholder="CTO" />
              {/* These input boxes need to come from the db of positions (http get) and need to be editable (http put). */}
            </div>
          </section>

          <section className="EditPositionsButtons">
            <button>SAVE</button>
            <button>DELETE</button>
            {/* Delete button takes you to DeletePosition view.
            Save button takes you back to AddPosition view. */}
          </section>
        </div>
      </div>
    )
  }
}

export default EditPositions
