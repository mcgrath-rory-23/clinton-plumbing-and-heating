import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';

const images = [
  { before: "path/to/before1.jpg", after: "path/to/after1.jpg" },
  { before: "path/to/before2.jpg", after: "path/to/after2.jpg" },
  // Add more images as needed
];

const Gallery = () => {
  return (
    <div>
      <SEO title="Gallery - Clinton Plumbing & Heating" description="View my gallery of past plumbing projects and works." />
      <Header />
      <main>
        <h1>Gallery</h1>
        <div className="gallery">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.before} alt="Before" />
              <img src={image.after} alt="After" />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
