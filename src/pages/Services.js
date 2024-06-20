import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceList from '../components/ServiceList';

const Services = () => {
  return (
    <div>
      <SEO title="Services - Clinton Plumbing & Heating" description="Explore the wide range of plumbing services offered by Clinton Plumbing & Heating." />
      <Header />
      <main>
        <h1>My Services</h1>
        <ServiceList />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
