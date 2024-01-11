import React from 'react';

import './Button.css';
import { useNavigate } from 'react-router-dom';

const Button = ({ props }) => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate('/calculator');
        }}
        className='button'
      >
        {props}
      </button>
    </div>
  );
};

export default Button;
