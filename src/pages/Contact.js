import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div>
      <SEO title="Contact - Clinton Plumbing & Heating" description="Get in touch with Clinton Plumbing & Heating for all your plumbing needs." />
      <Header />
      <main>
        <h1>Contact Me</h1>
        <p>For assistance, please call me at <a href="tel:+1234567890">+1234567890</a>.</p>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
