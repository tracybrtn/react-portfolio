import React from 'react';
import ResumePdf from "../../../src/assets/files/TRACY BURTON BRAVO - RESUME.pdf";

function Contact() {
 
  return (
    <section id="contact" className='d-flex flex-column'>
      <div className='contact-box'>
        <h2 data-testid="h1tag" id='contact'>Contact me</h2>
        <div className='contact-email'>
          <p>
            Send me an email at: <a href="mailto: tracynburton@gmail.com">tracynburton@gmail.com</a>
          </p>
        </div>
          <a 
            className="resume-text" 
            href={ResumePdf} download>
              Download my resume
          </a>
      </div>
    </section>
  )
}

export default Contact;