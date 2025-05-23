import React from 'react';

const Button = ({ color, onClick, children }) => {
  return (
    <button
      style={{
        backgroundColor: color || '#007bff', color: 'black',
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;