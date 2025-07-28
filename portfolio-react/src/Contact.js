import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>You can reach me via email or through my social media links below.</p>
      <div className="contact-details">
        <p><strong>Email:</strong> nagulkdm@gmail.com</p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/nagul-a-36571732b/" target="_blank" rel="noreferrer">linkedin.com/in/Nagul A</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/nagul-a" target="_blank" rel="noreferrer">github.com/nagul-a</a></p>
      </div>
    </section>
  );
}

export default Contact;
