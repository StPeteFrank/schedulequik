import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'

class Positions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allPositions: []
    }
  }

  componentDidMount() {
    this.loadAllPositions()
  }

  loadAllPositions = () => {
    axios.get('https://localhost:5001/api/positions').then(resp => {
      this.setState({
        allPositions: resp.data
      })
    })
  }

  render() {
    return (
      <div>
        <div className="App">
          <div className="CompanyName">
            <h2>ABC Company</h2>
            <h3>Position List</h3>
          </div>
          <div className="AddEditTabs">
            <Link to="/addpositions">ADD/DELETE POSITIONS</Link>
          </div>
          <div className="EmployeeContainer">
            {/* The EmployeeTable will come from EmployeesTable db (HttpGet). */}
            <table className="EmployeeTable">
              <tbody>
                {this.state.allPositions.map(position => {
                  return (
                    <tr>
                      <td>{position.positionName}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Positions
