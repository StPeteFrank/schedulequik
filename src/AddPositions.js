import React, { Component } from 'react'

class AddPositions extends Component {
  render() {
    return (
      <div>
        <h2>Add Positions</h2>
        <div className="AddPositionContainer">
          <section>
            <div className="AddButton">
              <p>New Positions</p> <button>ADD</button>
            </div>
            <div>
              <input type="text" placeholder="Enter Position" />
              {/* User inputs text of new position and clicks Add button to post onto db (HttpPost). */}
              {/* Then newly put position appears under PositionsList section (httpGet). */}
            </div>
          </section>

          <section className="PositionsList">
            <div className="EditDeleteButton">
              <p>Positions</p> <button>EDIT/DELETE</button>
              {/* Edit/Delete button takes user to EditPositions view. */}
            </div>
            <li>Office Manager</li>
            <li>Developer</li>
            <li>Senior Developer</li>
            <li>CTO</li>
            {/* These are hard-coded and will need to get positions from db (HttpGet). */}
          </section>
        </div>
        <div>
          <h2>Edit Positions</h2>
          <div className="EditPositionContainer">
            <section>
              <p>Positions</p>
              <div className="CurrentPositions">
                <input type="text" placeholder="Office Manager" />
                <input type="text" placeholder="Junior Developer" />
                <input type="text" placeholder="Developer" />
                <input type="text" placeholder="CTO" />
                {/* These input boxes need to come from the db of positions (http get) and need to be editable (http put). */}
              </div>
            </section>

            <section className="EditPositionsButtons">
              <button>SAVE</button>
              <button>DELETE</button>
              {/* Delete button takes you to DeletePosition view.
            Save button takes you back to AddPosition view. */}
            </section>
          </div>
        </div>
        <div>
          <h2>Delete Positions</h2>
          <div className="DeletePositionContainer">
            <section>
              <p>Positions</p>
              <div className="DeleteCurrentPositions">
                {/* Each ListedPosition needs to come from positions db (HttpGet).
              Then each ListedPosition can be chosen and deleted from db (HttpDelete). */}
                <div className="ListedPositions">
                  <input type="checkbox" /> <label>Office Manager</label>
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
              <button>EDIT POSITIONS</button>
              {/* Edit Positions button takes user back yo EditPositions view. */}
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default AddPositions
