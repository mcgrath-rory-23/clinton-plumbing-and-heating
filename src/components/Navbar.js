import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="row">
          <h1 className="logo">
            <NavLink to="/" exact>
              Clinton Plumbing & Heating
            </NavLink>
          </h1>
          <ul className="navbar-links">
            <li>
              <NavLink to="/" exact activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" activeClassName="active">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" activeClassName="active">
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/testimonials" activeClassName="active">
                Testimonials
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="button">
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
