import React from 'react'
import './Style.css';
import './Sidebar.css'
import {NavLink} from 'react-router-dom';
import Avatar from "./avatar.svg";

function Test() {
  const Design = {
    width: "32px",
    height: "32px",
    fontSize: "20px"
  }

  return (
    <>
      <div className="area"></div>
      <nav className="main-menu">
        <ul>
          <div id="mySidebar" className="sidebar">
            <li><img src={Avatar} className='m-3' style={Design} />
              <span style={Design}>ELIT</span>software Project
            </li>

            <hr />
            <div className="dropdown">
              <button className="dropbtn ">PLANNING</button>
              <div className="dropdown-content">
                <NavLink to="#">RoadMap</NavLink>
                <NavLink to="#">Board</NavLink>
              </div>
            </div>

            <li>
              <NavLink to="#">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <span className="nav-text">
                  RoadMap
                </span>
              </NavLink>
            </li>

            <li className="has-subnav">
              <NavLink to="#">
                <i className="fa fa-clipboard" aria-hidden="true"></i>
                <span className="nav-text">
                  Board
                </span>
              </NavLink>
            </li>

            <hr />

            <div className="dropdown">
              <span className="dropbtn m-2">DEVELOPMENT</span>
              <div className="dropdown-content">
                <NavLink to="#">Code</NavLink>
              </div>
            </div>
            
            <li className="has-subnav">
              <NavLink to="#">
                <i className="fa fa-code fa-2x"></i>
                <span className="nav-text">
                  Code
                </span>
              </NavLink>
            </li>
            <hr />

            <li className="has-subnav">
              <NavLink to="#">
                <i className="fa fa-book" aria-hidden="true"></i>
                <span className="nav-text">
                  Project Pages
                </span>
              </NavLink>

            </li>
            <li>
              <NavLink to="#">
                <i className="fa fa-file" aria-hidden="true"></i>
                <span className="nav-text">
                  Add Shortcut
                </span>
              </NavLink>
            </li>

            <li className="dropdown">
              <i className="fa fa-cogs fa-2x"></i>
              <span className="nav-text">
                Project settings
              </span>

              <div className="dropdown-content">
                <NavLink to="#">Board</NavLink>
                <NavLink to="#">Access</NavLink>
                <NavLink to="#">Issue Types</NavLink>
              </div>
            </li>
          </div>
        </ul>
      </nav>
    </>
  )
}
export default Test;
