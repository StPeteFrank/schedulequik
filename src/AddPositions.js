import React, { Component } from 'react'

class AddPositions extends Component {
  render() {
    return (
      <div>
        <h2>Add Positions</h2>
        <div className="AddPositionContainer">
          <p>New Positions</p> <button>Add</button>
          <p>Positions</p> <button>Edit/Delete</button>
        </div>
      </div>
    )
  }
}

export default AddPositions
