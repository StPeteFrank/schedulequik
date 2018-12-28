import React, { Component } from 'react'

class DeletePositions extends Component {
  render() {
    return (
      <div>
        <h2>Delete Positions</h2>
        <div className="DeletePositionContainer">
          <section>
            <p>Positions</p>
            <div className="DeleteCurrentPositions">
              {/* Each ListedPosition needs to come from positions db (HttpGet).
              Then each ListedPosition can be chosen and deleted from db (HttpDelete). */}
              <div className="ListedPositions">
                <input type="radio" /> <label>Office Manager</label>
              </div>
              <div className="ListedPositions">
                <input type="radio" /> <label>Junior Developer</label>
              </div>
              <div className="ListedPositions">
                <input type="radio" /> <label>Developer</label>
              </div>
              <div className="ListedPositions">
                <input type="radio" /> <label>CTO</label>
              </div>
            </div>
          </section>

          <section className="DeletePositionsButtons">
            <button>Delete Selected</button>
            {/* Delete Selected button takes user back to AddPositions view. */}
            <button>Edit Positions</button>
            {/* Edit Positions button takes user back yo EditPositions view. */}
          </section>
        </div>
      </div>
    )
  }
}

export default DeletePositions
