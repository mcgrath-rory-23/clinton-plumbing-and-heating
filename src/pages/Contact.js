// src/pages/Contact.js

import React from 'react';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <div>
      <SEO title="Contact - Clinton Plumbing & Heating" description="Get in touch with Clinton Plumbing & Heating for all your plumbing needs." />
      <h1>Contact Us</h1>
      <p>Phone: (123) 456-7890</p>
      <p>Email: info@clintonplumbing.com</p>
      <h2>Non-Urgent Inquiries</h2>
      <ContactForm />
    </div>
  );
}

export default Contact;
