import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <SEO title="Home - Clinton Plumbing & Heating" description="Welcome to Clinton Plumbing & Heating. Reliable and experienced plumbing services." />
      <Header />
      <main>
        <section className="hero">
          <h1>Welcome to Clinton Plumbing & Heating</h1>
          <p>Reliable and experienced plumbing services.</p>
          <a href="tel:+1234567890" className="call-to-action">Give Me a Call</a>
        </section>
        <section className="about">
          <h2>About Me</h2>
          <p>I am a certified plumber with over 15 years of experience in providing top-notch plumbing services.</p>
        </section>
        <section className="services-overview">
          <h2>Our Services</h2>
          <p>I offer a wide range of plumbing services, including repairs, installations, and maintenance.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
