import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class AddPositions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allPositions: []
    }
  }

  addPositionToApi = e => {
    e.preventDefault()
    axios
      .post('https://localhost:5001/api/positions', {
        positionName: this.state.positionName
      })
      .then(response => {
        //TODO: redirect to /employees using react router (or vanilla js)
      })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
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
              {/* User inputs text of new position and clicks Add button to post onto db (HttpPost). */}
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
            <div className="DeleteCurrentPositions">
              {/* Each ListedPosition needs to come from positions db (HttpGet).
              Then each ListedPosition can be chosen and deleted from db (HttpDelete). */}
              <div className="ListedPositions">
                <input type="checkbox" /> <label>Hardcoded Position</label>
                {/* <input type="checkbox" /> */}
                {/* Radio will only allow me to choose one. */}
                {/* Custom checkbox . Not really! */}
              </div>
              <div className="ListedPositions">
                <input type="checkbox" /> <label>Junior Developer</label>
              </div>
              <div className="ListedPositions">
                <input type="checkbox" /> <label>Developer</label>
              </div>
              <div className="ListedPositions">
                <input type="checkbox" /> <label>CTO</label>
              </div>
            </div>
          </section>

          <section className="DeletePositionsButtons">
            <button>DELETE SELECTED</button>
            {/* Delete Selected button takes user back to AddPositions view. */}
          </section>
        </div>
      </div>
    )
  }
}

export default AddPositions
