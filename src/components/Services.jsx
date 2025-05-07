import React from 'react';
import './services.css';
import Service from './Service';

const groupOfServices = [
  {
    id: 1,
    name: 'Term Life Insurance',
    description: 'Some shiny service',
    extra: 'Learn More',
    className: 'fa-solid fa-shield-halved',
  },
  {
    id: 2,
    name: 'Whole Life Insurance',
    description: 'Some shiny service',
    extra: 'Learn More',
    className: 'fa-solid fa-life-ring',
  },
  {
    id: 3,
    name: 'Retirement & Annuities',
    description: 'Some shiny service',
    extra: 'Learn More',
    className: 'fa-solid fa-piggy-bank',
  },
  {
    id: 4,
    name: 'Business Insurance',
    description: 'Some shiny service',
    extra: 'Learn More',
    className: 'fa-solid fa-building',
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
              <Service key={service.id} service={service} />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
