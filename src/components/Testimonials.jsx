import React from 'react';
import './testimonials.css';
import Testimony from './Testimony';
import Contact from './Contact';
import ContactMap from './ContactMap';

const groupTestimony = [
  {
    id: 1,
    quote:
      'Our agent helped us find the perfect plan for our growing family',
  },
  {
    id: 2,
    quote:
      'Our agent helped us find the perfect plan for our growing family',
  },
  {
    id: 3,
    quote:
      'Our agent helped us find the perfect plan for our growing family',
  },
];

function Testimonials() {
  return (
    <div className="testimonials--container">
      <div className="testimonials--reviews">
        <h2>Client Testimonials</h2>
        {groupTestimony.map((testimony) => {
          return (
            <>
              <Testimony key={testimony.id} testimony={testimony} />
            </>
          );
        })}
        <p>Read More Reviews</p>
      </div>
      <div className="testimonials--contact">
        <Contact />
      </div>
      <div className="testimonials--map">
        <ContactMap />
      </div>
    </div>
  );
}

export default Testimonials;
