// src/pages/Gallery.js

import React from 'react';
import SEO from '../components/SEO';

function Gallery() {
  return (
    <div>
      <SEO title="Gallery - Clinton Plumbing & Heating" description="View my gallery of past plumbing projects and works." />
      <h1>Our Work</h1>
      <div className="gallery">
        <img src="path/to/before1.jpg" alt="Before repair" />
        <img src="path/to/after1.jpg" alt="After repair" />
      </div>
    </div>
  );
}

export default Gallery;
