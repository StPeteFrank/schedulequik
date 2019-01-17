import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class ScheduleCell extends Component {
  render() {
    console.log(this.props)
    return (
      <Link
        className="ScheduleCells"
        to={{ pathname: '/quikshiftadd', state: { shift: this.props.shift } }}
      >
        <li>
          {new Date(this.props.shift.inTime).toLocaleTimeString([], {
            // month: 'short',
            // day: '2-digit',
            // year: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
          })}
          -
        </li>
        <li>
          {new Date(this.props.shift.outTime).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
          })}
        </li>
        <li>{this.props.shift.positions.positionName}</li>
      </Link>
    )
  }
}

export default ScheduleCell
