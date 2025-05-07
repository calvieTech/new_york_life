import React from 'react';
import './contact.css';

function Contact() {
  return (
    <div className="contact--container">
      <h2>Contact</h2>
      <form action="" className="contact--form">
        <input type="name" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Phone Number" />
        <input
          type="text"
          placeholder="Message"
          id="contact--message"
        />
      </form>
    </div>
  );
}

export default Contact;
