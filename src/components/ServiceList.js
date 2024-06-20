import React from 'react';

function ServiceList({ services }) {
    return (
        <div>
            {services.map(service => (
                <ServiceItem key={service.id} service={service} />
            ))}
        </div>
    );
}

function ServiceItem({ service }) {
    return <div>{service.name}</div>;
}

export default ServiceList;
