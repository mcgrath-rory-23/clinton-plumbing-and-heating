import React from 'react';

const services = [
  { title: "General Plumbing", description: "All kinds of plumbing repairs and maintenance." },
  { title: "Water Heater Installation", description: "Expert installation of water heaters." },
  { title: "Drain Cleaning", description: "Efficient drain cleaning services." },
  { title: "Leak Detection", description: "Professional leak detection and repair." },
];

const ServiceList = () => {
  return (
    <ul>
      {services.map((service, index) => (
        <li key={index}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default ServiceList;
