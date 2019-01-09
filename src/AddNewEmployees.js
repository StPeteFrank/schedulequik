import React, { Component } from 'react'
// import axios from 'axios'

class AddNewEmployees extends Component {
  render() {
    return (
      <div>
        <h2>Add New Employees</h2>
        <div className="AddNewEmployeeContainer">
          <section className="AddNewEmployee">
            {/* These inputs will need to add data to EmployeesTable db (HttpPut). */}
            {/* Then later be displayed on the Employees view (HttpGet). */}
            <div className="AddNewName">
              <p>Name</p>
            </div>
            <div className="InputName">
              <div>
                <input type="text" placeholder="Enter First Name" />
              </div>
              <div>
                <input type="text" placeholder="Enter Last Name" />
              </div>
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
              <input type="text" placeholder="Enter Email Address" />
            </div>

            <div className="AddNewEmployeeButton">
              <button>ADD NEW EMPLOYEE</button>
              {/* Once AddNewEmployeeButton is clicked the new employee will be saved and
              appear on the Employees view. The user will be taken back to the Employees view page. */}
            </div>
          </section>
        </div>

        <h2>Delete Employees</h2>
        <div className="DeleteEmployeeContainer">
          <section className="DeleteEmployee">
            {/* These inputs will need to add data to EmployeesTable db (HttpPut). */}
            {/* Then later be displayed on the Employees view (HttpGet). */}

            <p>Select Employees</p>
            {/* These hard-coded Select Positions inputs will come from PositionsTable db (HttpGet). */}
            {/* Once they are selected they will add to EmployeePositionsTable (HttpPut). */}
            <div className="ListedPositions">
              <input type="checkbox" /> <label>Greg Banana</label>
            </div>
            <div className="ListedPositions">
              <input type="checkbox" /> <label>Jane Doe</label>
            </div>
            <div className="ListedPositions">
              <input type="checkbox" /> <label>Jennifer Zayne</label>
            </div>
            <div className="ListedPositions">
              <input type="checkbox" /> <label>Joe Banana</label>
            </div>
            <div className="AddNewEmployeeButton">
              <button>DELETE EMPLOYEE</button>
              {/* Once AddNewEmployeeButton is clicked the new employee will be saved and
              appear on the Employees view. The user will be taken back to the Employees view page. */}
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default AddNewEmployees
