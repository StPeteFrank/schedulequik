import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="ScheduleQuikButton">
          <Link to="/home">ScheduleQuik</Link>
        </div>
        <a
          className="Links"
          href="https://www.github.com/StPeteFrank"
          target="_blank"
        >
          &copy;2019 github.com/StPeteFrank
        </a>
      </div>
    )
  }
}

export default Footer
