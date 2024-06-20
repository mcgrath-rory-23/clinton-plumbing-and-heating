import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';

const testimonials = [
  { name: "John Doe", review: "Excellent service! Highly recommended." },
  { name: "Jane Smith", review: "Professional and reliable plumber." },
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <div>
      <SEO title="Testimonials - Clinton Plumbing & Heating" description="Read what my customers have to say about Clinton Plumbing & Heating." />
      <Header />
      <main>
        <h1>Customer Testimonials</h1>
        <ul>
          {testimonials.map((testimonial, index) => (
            <li key={index}>
              <blockquote>{testimonial.review}</blockquote>
              <cite>- {testimonial.name}</cite>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;
