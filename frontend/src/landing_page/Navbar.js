
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    
      <nav className="navbar navbar-expand-lg border-bottom " style={{ backgroundColor: "ffffff" }}>
        <div className="container">
          <Link className="navbar-brand" to="">
            <img src="media/images/logoF.svg" alt="Logo" width="170" height="50"/>
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <Link className="nav-link active" to="/signup">
                  SignUp
                </Link>
              </li>

              <li className="nav-item mx-3">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item mx-3">
                <Link className="nav-link active" to="/products">
                  Products
                </Link>
              </li>

              <li className="nav-item mx-3">
                <Link className="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>

              <li className="nav-item mx-3">
                <Link className="nav-link active" to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
  );
}

export default Navbar;

