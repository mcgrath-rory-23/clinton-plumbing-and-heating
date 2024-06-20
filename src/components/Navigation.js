import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <ul>
                <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/services" activeClassName="active">Services</NavLink></li>
                <li><NavLink to="/gallery" activeClassName="active">Gallery</NavLink></li>
                <li><NavLink to="/testimonials" activeClassName="active">Testimonials</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navigation;