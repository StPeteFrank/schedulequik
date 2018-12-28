import React, { Component } from 'react'

class AddNewEmployees extends Component {
  render() {
    return (
      <div>
        <h2>Add New Employees</h2>
        <div className="AddNewEmployeeContainer">
          <section>
            <div className="AddNewName">
              <p>Name</p>
            </div>
            <div className="InputName">
              <input type="text" placeholder="Enter First Name" />
              <input type="text" placeholder="Enter Last Name" />
            </div>
            <div className="AddNewPhone">
              <p>Phone</p>
            </div>
            <div className="InputPhone">
              <input type="text" placeholder="Enter Phone Number" />
            </div>
            <div className="AddNewEmail">
              <p>Email</p>
            </div>
            <div className="InputEmail">
              <input type="text" placeholder="Enter Email" />
            </div>
          </section>

          <section className="PositionsList">
            <div className="EditDeleteButton">
              <p>Positions</p> <button>Edit/Delete</button>
            </div>
            <li>Office Manager</li>
            <li>Developer</li>
            <li>Senior Developer</li>
            <li>CTO</li>
          </section>
        </div>
      </div>
    )
  }
}

export default AddNewEmployees
