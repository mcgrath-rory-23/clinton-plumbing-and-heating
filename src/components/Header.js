import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you will add custom CSS here

function Header() {
    return (
        <header className="header">
            {/* Background image or video */}
            <div className="header-background">
                <video src="./video.mp4" loop autoPlay muted className="header-video"></video>
                {/* If you prefer an image, you can replace the video tag with this: */}
                {/* <img src="./path/to/background.jpg" alt="Plumbing background" className="header-image" /> */}
            </div>

            {/* Main heading */}
            <h1>Clinton Plumbing & Heating</h1>

            {/* Call-to-action buttons */}
            <div className="header-buttons">
                <Link to="/contact" className="btn request-quote-btn">Request a Quote</Link>
                <a href="tel:+1234567890" className="btn contact-btn">Contact Me</a>
            </div>
        </header>
    );
}

export default Header;
