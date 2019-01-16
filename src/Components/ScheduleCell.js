import React, { Component } from 'react'

class ScheduleCell extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.shift.inTime} {this.props.shift.outTime}{' '}
        {this.props.shift.positions.positionName}
      </div>
    )
  }
}

export default ScheduleCell
