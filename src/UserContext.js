import React, { Component } from "react";
import "./UserContext.css";

class UserContext extends Component {
  render() {
    return (
      <div className="context-container d-flex flex-column justify-content-center align-items-start">
        <h1 className="heading">Notifications</h1>
        <div className="boxes-container d-flex flex-column align-items-center">
          <div className="box-1">
            <img
              src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
              className="img"
            />
            <p>Content inside box 1</p>
          </div>
          <div className="box-2 ">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              className="img"
            />
            <p>Content inside box 2</p>
          </div>
          <div className="box-3">
            <img
              src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
              className="img"
            />
            <p>Content inside box 3</p>
          </div>
          <div className="box-4">
            <img
              src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
              className="img"
            />
            <p>Content inside box 3</p>
          </div>
        </div>
      </div>
    );
  }
}

export default UserContext;
