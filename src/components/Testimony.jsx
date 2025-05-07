import React from 'react';
import './testimony.css';

function Testimony({ testimony }) {
  return (
    <div className="testimony--container">
      <i className="fa-regular fa-circle-user fa-2xl"></i>
      <p>{testimony.quote}</p>
    </div>
  );
}

export default Testimony;
