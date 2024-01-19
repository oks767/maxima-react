import React, { useState } from 'react';

import './Checkbox.css';

const Checkbox = ({ type = 'checkbox', name, checked = false, onChange }) => {
  console.log('Checkbox: ', name, checked);

  return (
    <div className='wrapper-checkbox'>
      <input
        type={type}
        name={name}
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
};

export default Checkbox;
