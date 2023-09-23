import React from 'react';
// import React, { useState } from 'react';

// import function to validate email
// import { validateEmail } from '../../utils/helpers';

// Contact form function.
function ContactForm() {
  // const [formState, setFormState] = useState({ name: '', email: '', message: '' });
 
  // const [errorMessage, setErrorMessage] = useState('');
  // const { name, email, message } = formState;

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(formState);
  // };

  // function handleChange(e) {
  //   if (e.target.name === 'email') {
  //     const isValid = validateEmail(e.target.value);
  //     if (!isValid) {
  //       setErrorMessage('Your email is invalid.');
  //     } else {
  //       setErrorMessage('');
  //     }
  //   } else {
  //     if (!e.target.value.length) {
  //       setErrorMessage(`${e.target.name} is required.`);
  //     } else {
  //       setErrorMessage('');
  //     }
  //   }
  //   if (!errorMessage) {
  //     setFormState({...formState, [e.target.name]: e.target.value })
  //   }
  // };

  return (
    <section id="contact" className='d-flex flex-column'>
      <h2 data-testid="h1tag" id='contact'>Contact me</h2>
      <div className='contact-email'>
        <br></br>
        <p>
          Send me an email at: <a href="mailto: tracynburton@gmail.com">tracynburton@gmail.com</a>
        </p>
      </div>
      {/* <div className='form'>
        <form id="contact-form" onSubmit={handleSubmit}>
          <h3>...fill out the contact form</h3>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
          </div>
          <div>
            <label htmlFor="email">Email address:</label>
            <input type="email" name="email" defaultValue={email} onBlur={handleChange}/>
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange}/>
          </div>
          {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
          <button type="submit" data-testid="button">Submit</button>
        </form>
      </div> */}
    </section>
  )
}

export default ContactForm;