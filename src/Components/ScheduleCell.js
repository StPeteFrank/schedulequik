import React, { Component } from 'react'

class ScheduleCell extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <li>
          {new Date(this.props.shift.inTime).toLocaleTimeString([], {
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
      </div>
    )
  }
}

export default ScheduleCell
