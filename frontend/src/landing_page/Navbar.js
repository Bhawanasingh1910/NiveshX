import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img
            src="media/images/logoF.svg"
            alt="Logo"
            width="170"
            height="50"
          />
        </NavLink>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item mx-3">
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "fw-bold" : ""}`
                }
                style={({ isActive }) => ({
                  color: isActive ? "#7C3AED" : "#18181B",
                })}
              >
                SignUp
              </NavLink>
            </li>

            <li className="nav-item mx-3">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "fw-bold" : ""}`
                }
                style={({ isActive }) => ({
                  color: isActive ? "#7C3AED" : "#18181B",
                })}
              >
                About
              </NavLink>
            </li>

            <li className="nav-item mx-3">
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "fw-bold" : ""}`
                }
                style={({ isActive }) => ({
                  color: isActive ? "#7C3AED" : "#18181B",
                })}
              >
                Products
              </NavLink>
            </li>

            <li className="nav-item mx-3">
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "fw-bold" : ""}`
                }
                style={({ isActive }) => ({
                  color: isActive ? "#7C3AED" : "#18181B",
                })}
              >
                Pricing
              </NavLink>
            </li>

            <li className="nav-item mx-3">
              <NavLink
                to="/support"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "fw-bold" : ""}`
                }
                style={({ isActive }) => ({
                  color: isActive ? "#7C3AED" : "#18181B",
                })}
              >
                Support
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;