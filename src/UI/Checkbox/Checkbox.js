import React from 'react';

import './Checkbox.css';

const Checkbox = ({ image }) => {
  return (
    <div className='wrapper-checbox'>
      <img
        src={image}
        alt='ok icon'
      />
    </div>
  );
};

export default Checkbox;
