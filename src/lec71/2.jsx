import React, { useState } from 'react';

const EmailValidator = () => {
  const [email, setEmail] = useState('');

  const isValidEmail = email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

  return (
    <div>
      <h3>Email Validator</h3>
      <input
        type="text"
        placeholder="Enter email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p>
        {email && (isValidEmail ? 'Valid Email' : 'Invalid Email')}
      </p>
    </div>
  );
};

export default EmailValidator;
