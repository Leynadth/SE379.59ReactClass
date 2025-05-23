import React from 'react';

const Text = ({ size, color, children }) => {
  const sizeStyles = {small: '8px', medium: '16px', large: '21px',
  };
const selectedFontSize = sizeStyles[size] || sizeStyles.Large;

  return (
    <p style={{ fontSize: selectedFontSize, color: color || 'black' }}>
      {children}
    </p>
  );
};

export default Text;