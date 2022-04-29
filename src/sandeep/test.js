import React from 'react'
import './Style.css';
import './Sidebar.css'
import {Link} from 'react-router-dom';
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
                <Link to="#">RoadMap</Link>
                <Link to="#">Board</Link>
              </div>
            </div>

            <li>
              <Link to="#">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <span className="nav-text">
                  RoadMap
                </span>
              </Link>
            </li>

            <li className="has-subnav">
              <Link to="#">
                <i className="fa fa-clipboard" aria-hidden="true"></i>
                <span className="nav-text">
                  Board
                </span>
              </Link>
            </li>

            <hr />

            <div className="dropdown">
              <span className="dropbtn m-2">DEVELOPMENT</span>
              <div className="dropdown-content">
                <Link to="#">Code</Link>
              </div>
            </div>

            <li className="has-subnav">
              <Link to="#">
                <i className="fa fa-code fa-2x"></i>
                <span className="nav-text">
                  Code
                </span>
              </Link>
            </li>
            <hr />

            <li className="has-subnav">
              <Link to="#">
                <i className="fa fa-book" aria-hidden="true"></i>
                <span className="nav-text">
                  Project Pages
                </span>
              </Link>

            </li>
            <li>
              <Link to="#">
                <i className="fa fa-file" aria-hidden="true"></i>
                <span className="nav-text">
                  Add Shortcut
                </span>
              </Link>
            </li>

            <li className="dropdown">
              <i className="fa fa-cogs fa-2x"></i>
              <span className="nav-text">
                Project settings
              </span>

              <div className="dropdown-content">
                <Link to="#">Board</Link>
                <Link to="#">Access</Link>
                <Link to="#">Issue Types</Link>
              </div>
            </li>
          </div>
        </ul>
      </nav>
    </>
  )
}
export default Test;
