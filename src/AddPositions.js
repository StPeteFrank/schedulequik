import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import config from './Config'

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
      .post(config.API_URL + '/positions', {
        PositionName: this.state.positionName
      })
      .then(() => {
        window.location = '/positions'
      })
  }

  deletePositionFromApi = () => {
    axios.delete(config.API_URL + '/positions/id').then(this.loadAllPositions())
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  cancelButton = () => {
    window.location = '/positions'
  }

  loadAllPositions = () => {
    axios.get(config.API_URL + '/positions').then(resp => {
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

  deleteSelectedPositions = () => {
    // DELETE request to the API
    // Update state with latest employee list
    axios
      .delete(config.API_URL + '/positions/list', {
        headers: {
          contentType: 'application/json'
        },
        data: {
          positionIds: this.state.positionIDsSelectedForDelete
        }
      })
      .then(() => this.loadAllPositions())
    window.location = '/positions'
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
                value={this.state.positionName}
                onChange={this.handleChange}
              />
              <button onClick={this.addPositionToApi}>ADD</button>
              <button onClick={this.cancelButton}>CANCEL</button>
            </div>
          </section>

          <section className="PositionsList">
            <div className="EditDeleteButton" />
          </section>
        </div>

        <h2>Delete Positions</h2>
        <div className="DeletePositionContainer">
          <section>
            <p>Select Positions</p>
            {this.state.allPositions.map(position => {
              return (
                <div className="ListedPositions" key={position.id}>
                  <input
                    className="DeleteCheckbox"
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
            <button onClick={this.deleteSelectedPositions}>
              DELETE POSITION
            </button>
          </section>
        </div>
      </div>
    )
  }
}

export default AddPositions
