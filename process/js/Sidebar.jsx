/* eslint-disable */
import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <aside className="main-sidebar col-12 col-md-3 col-lg-2 px-0">
        <div className="main-navbar">
          <nav className="navbar align-items-stretch navbar-light bg-white flex-md-nowrap border-bottom p-0">
            <a
              className="navbar-brand w-100 mr-0"
              href="https://www.facebook.com/drtanyamuhamad/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="d-table m-auto">
                <img
                  id="main-logo"
                  className="d-inline-block align-top mr-1"
                  src="images/drfblogo.png"
                  alt="Shards Dashboard"
                />
                <span className="d-none d-md-inline ml-1">Dr Tanya</span>
              </div>
            </a>
            <a
              className="toggle-sidebar d-sm-inline d-md-none d-lg-none"
              href="https://google.com"
            >
              <i className="material-icons">&#xE5C4;</i>
            </a>
          </nav>
        </div>
        <div className="nav-wrapper">
          <ul className="nav flex-column">
            <li className="nav-item" onClick={e => this.props.handleDashboard(e)}>
              <a className={"nav-link " + (this.props.isDashboard ? "active" : "")} href="#">
                <i className="material-icons">edit</i>
                <span>Dashboard</span>
              </a>
            </li>
            <li className="nav-item" onClick={e => this.props.allPatients(e)}>
              <a className={"nav-link " + (this.props.isAllPatients ? "active" : "")} href="#">
                <i className="material-icons">vertical_split</i>
                <span>All Patients</span>
              </a>
            </li>
            <li className="nav-item" onClick={e => this.props.addPatient(e)}>
              <a className={"nav-link " + (this.props.isAdding ? "active" : "")} href="#">
                <i className="material-icons">note_add</i>
                <span>Add New Patient</span>
              </a>
            </li>
            <li className="nav-item" onClick={e => this.props.addProcedureList(e)}>
              <a className={"nav-link " + (this.props.isAddingProcedure ? "active" : "")} href="#">
                <i className="material-icons">note_add</i>
                <span>Add New Procedure</span>
              </a>
            </li>
            <li className="nav-item" onClick={e => this.props.handlePortfolio(e)}>
              <a className={"nav-link " + (this.props.isPortfolio ? "active" : "")} href="#">
                <i className="material-icons">perm_media</i>
                <span>Portfolio</span>
              </a>
            </li>
            <li className="nav-item" onClick={e => this.props.handleLogout(e)}>
              <a className="nav-link" href="#">
                <i className="material-icons">&#xE879;</i>
                <span>Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    );
  }
}

export default Sidebar;