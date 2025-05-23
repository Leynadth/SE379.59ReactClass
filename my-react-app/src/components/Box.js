import React from 'react';

const Box = ({ size, children }) => {
  const sizeStyles = {
    small: { width: '80px', height: '80px' }, medium: { width: '275px', height: '275px' }, large: { width: '425px', height: '425px' },
  };
const selectedSize = sizeStyles[size] || sizeStyles.medium;

  return (
    <div style={{ backgroundColor: '#f0f0f0', ...selectedSize, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      {children}
    </div>
  );
};

export default Box;
