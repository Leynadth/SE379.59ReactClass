import React, { useState } from 'react';

export const UseStateDemo = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleEmailChange = (event) => {
    setFormState({
      ...formState,
      email: event.target.value
    })
  };

  return (
    <div className="container">
      <label className="form-label">First Name</label>
      <input
        type="text"
        value={firstName}
        onChange={(event) =>
          setFormState({
            ...formState,
            firstName: event.target.value
          })
        }
      />
      <label className="form-label">Last Name</label>
      <input
        type="text"
        value={lastName}
        onChange={(event) =>
          setFormState({
            ...formState,
            lastName: event.target.value
          })
        }
      />
      <label className="form-label">Email</label>
      <input type="email" value={email} onChange={handleEmailChange} />
      <button className="button">Submit</button>
    </div>
  );
};