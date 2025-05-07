import React from 'react';
import './service.css';

function Service({ service }) {
  return (
    <div className="service--container">
      <i className={`${service.className} fa-2xl`}></i>
      <h4>{service.name}</h4>
      <p>{service.description}</p>
      <p>{service.extra}</p>
    </div>
  );
}

export default Service;
