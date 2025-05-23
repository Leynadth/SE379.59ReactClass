// components/MyAwsome.js
import React from 'react';
import Box from './Box';
import Text from './Text';
import Button from './Button';

const MyAwsome = () => {
  const handleClick = (size) => {
    alert(`Button in ${size} box was clicked!`);
  };

  return (
    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '40px', flexWrap: 'wrap' }}>
      
      <Box size="small">
        <Text size="small" color="magenta">Small Box</Text>
        <Button color="blue" onClick={() => handleClick('small')}>Click Small</Button>
      </Box>

      <Box size="medium">
        <Text size="medium" color="violet">Medium Box</Text>
        <Button color="red" onClick={() => handleClick('medium')}>Click Medium</Button>
      </Box>

      <Box size="large">
        <Text size="large" color="purple">Large Box</Text>
        <Button color="yellow" onClick={() => handleClick('large')}>Click Large</Button>
      </Box>

    </div>
  );
};

export default MyAwsome;
