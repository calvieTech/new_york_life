import React from 'react';
import './services.css';
import Service from './Service';

const groupOfServices = [
  {
    name: 'Term Life Insurance',
    description: 'Some shiny service',
    extra: 'Learn More',
  },
  {
    name: 'Whole Life Insurance',
    description: 'Some shiny service',
    extra: 'Learn More',
  },
  {
    name: 'Retirement & Annuities',
    description: 'Some shiny service',
    extra: 'Learn More',
  },
  {
    name: 'Business Insurance',
    description: 'Some shiny service',
    extra: 'Learn More',
  },
];

function Services() {
  return (
    <div className="services--container">
      <h1>Services Overview</h1>
      <div className="services--group">
        {groupOfServices.map((service) => {
          return (
            <>
              <Service service={service} />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
