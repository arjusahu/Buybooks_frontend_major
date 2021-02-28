/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import logo from "../images/logo.jpg";

function Navbar() {
  return (
    <>
      <div className=" nav_bg navbar1">
        <div className="row">
          <div className="col-12 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <img className="logo" src={logo} alt="logo" />
              <NavLink className="navbar-brand" exact to="/">
                Buybooks
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      exact
                      to="/"
                    >
                      HOME
                    </NavLink>
                  </li>
                  <li className="nav-item active">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      exact
                      to="/blog"
                    >
                      BLOG
                    </NavLink>
                  </li>
                  <li className="nav-item active">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      exact
                      to="/buybooks"
                    >
                      BUY BOOKS
                    </NavLink>
                  </li>
                  {/* <li className="nav-item active">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      exact
                      to="/"
                    >
                      SELL BOOKS
                    </NavLink>
                  </li> */}
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/aboutus2"
                    >
                      ABOUT US
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/contactus2"
                    >
                      CONTACT US
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/"
                    >
                      LOGOUT
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;