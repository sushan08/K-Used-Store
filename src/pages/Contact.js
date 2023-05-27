
import React, { useState } from 'react';

export const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form validation logic here before setting formSubmitted to true
    setFormSubmitted(true);
  };

  const styles = {
    primaryColor: '#0077cc',
    secondaryColor: '#333',
    formBackgroundColor: '#f2f2f2',
    labelStyle: {
      color: '#0077cc',
    },
    inputStyle: {
      padding: '5px',
      borderRadius: '5px',
      border: '1px solid #0077cc',
    },
    submitButtonStyle: {
      backgroundColor: '#0077cc',
      color: '#fff',
      padding: '10px',
      borderRadius: '5px',
      border: 'none',
    },
    formFeedbackStyle: {
      color: '#0077cc',
    },
  };

  return (
    <div style={{ color: styles.secondaryColor }}>
      <h1>Contact Us</h1>
      <p>
        Please feel free to contact us using the information below, or by filling out the form.
      </p>
      <div>
        <h3>Phone</h3>
        <p>
          <a href="tel:123-456-7890" style={{ color: styles.primaryColor }}>123-456-7890</a>
        </p>
      </div>
      <div>
        <h3>Email</h3>
        <p>
          <a href="mailto:info@example.com" style={{ color: styles.primaryColor }}>info@example.com</a>
        </p>
      </div>
      <div style={{ backgroundColor: styles.formBackgroundColor, padding: '20px', borderRadius: '5px' }}>
        <h3>Contact Form</h3>
        {formSubmitted ? (
          <p style={styles.formFeedbackStyle}>Thank you for contacting us!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" style={styles.labelStyle}>Name:</label>
              <input type="text" id="name" name="name" style={styles.inputStyle} />
            </div>
            <div>
              <label htmlFor="email" style={styles.labelStyle}>Email:</label>
              <input type="email" id="email" name="email" style={styles.inputStyle} />
            </div>
            <div>
              <label htmlFor="message" style={styles.labelStyle}>Message:</label>
              <textarea id="message" name="message" style={styles.inputStyle}></textarea>
            </div>
            <div>
              <button type="submit" style={styles.submitButtonStyle}>Submit</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;

