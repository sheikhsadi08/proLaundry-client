import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard/ServiceCard';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);
    
  useEffect(() => {
    fetch('https://vast-ravine-84927.herokuapp.com/services')
    .then(res => res.json())
    .then(data => setServices(data))
  }, [])


    return (
        <div >
            <h1 className="service-heading">Our <span>Services</span></h1>
            <div className="service-container">
            {services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)}
            </div>
        </div>
    );
};

export default Services;