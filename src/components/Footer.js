import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    {/* Contact Information */}
                    <div className="col-md-6">
                        <h3>Contact Information</h3>
                        <ul>
                            <li>Email: <a href="mailto:john@example.com">john@example.com</a></li>
                            <li>Phone: <a href="tel:+1234567890">+1234567890</a></li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div className="col-md-6">
                        <h3>Follow Me</h3>
                        <ul>
                            <li><a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
                            <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
                            {/* Add more social links as needed */}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button onClick={() => scroll.scrollToTop()} className="gotop">
                Go to Top
            </button>

            {/* Copyright Information */}
            <p>© 2024 Clinton Plumbing & Heating. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
