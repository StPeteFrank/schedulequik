import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class AddPositions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allPositions: [],
      deletePosition: [],
      positionIDsSelectedForDelete: []
    }
  }

  componentDidMount() {
    this.loadAllPositions()
  }

  addPositionToApi = e => {
    e.preventDefault()
    axios
      .post('https://localhost:5001/api/positions', {
        PositionName: this.state.positionName
      })
      .then(this.loadAllPositions())
  }

  deletePositionFromApi = () => {
    axios
      .delete('https://localhost:5001/api/positions/id')
      .then(this.loadAllPositions())
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  loadAllPositions = () => {
    axios.get('https://localhost:5001/api/positions').then(resp => {
      this.setState({
        allPositions: resp.data
      })
    })
  }

  _selectPositionForDeletion = event => {
    const selectedPositionID = event.target.value

    if (this.state.positionIDsSelectedForDelete.includes(selectedPositionID)) {
      // remove that id from the array
      const newIDs = this.state.positionIDsSelectedForDelete.filter(
        id => id != selectedPositionID
      )

      this.setState({ positionIDsSelectedForDelete: newIDs })
    } else {
      // Make a list of new IDs with the selected ID appended
      const newIDs = this.state.positionIDsSelectedForDelete.concat([
        selectedPositionID
      ])

      this.setState({ positionIDsSelectedForDelete: newIDs })
    }
  }

  render() {
    return (
      <div>
        <h2>Add Positions</h2>
        <div className="AddPositionContainer">
          <section>
            <div className="AddButton">
              <p>Add New Positions</p>
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter Position"
                name="positionName"
                onChange={this.handleChange}
              />
              <button onClick={this.addPositionToApi}>ADD</button>
              {/* Then newly put position appears under PositionsList section (httpGet). */}
            </div>
          </section>

          <section className="PositionsList">
            <div className="EditDeleteButton">
              <p>Positions</p>
              {/* Edit/Delete button takes user to EditPositions view. */}
            </div>
            <li>Hardcoded Position</li>
            <li>Developer</li>
            <li>Senior Developer</li>
            <li>CTO</li>
            {/* These are hard-coded and will need to get positions from db (HttpGet). */}
          </section>
        </div>

        <h2>Delete Positions</h2>
        <div className="DeletePositionContainer">
          <section>
            <p>Positions</p>
            {this.state.allPositions.map(position => {
              return (
                <div className="ListedPositions">
                  <input
                    type="checkbox"
                    value={position.id}
                    onClick={this._selectPositionForDeletion}
                  />
                  <label>{position.positionName}</label>
                </div>
              )
            })}
          </section>

          <section className="DeletePositionsButtons">
            <button onClick={this.deletePositionFromApi}>
              DELETE POSITION
            </button>
            {/* Delete Selected button takes user back to AddPositions view. */}
          </section>
        </div>
      </div>
    )
  }
}

export default AddPositions
