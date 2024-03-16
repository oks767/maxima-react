import React from 'react';
import './Button.css';
import { useNavigate } from 'react-router-dom';

const Button = ({ props, clickHandler, clickHandlerNext, disabled }) => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    if (!disabled) {
      if (clickHandler) {
        clickHandler(); // Вызываем переданный clickHandler, если он предоставлен
      }
      if (clickHandlerNext) {
        clickHandlerNext(); // Вызываем переданный clickHandlerNext, если он предоставлен
      }
      navigate('/calculator'); // Выполняем навигацию на другую страницу
    }
  };
  return (
    <div>
      <button
        onClick={handleButtonClick}
        className='button'
        disabled={disabled}
      >
        {props}
      </button>
    </div>
  );
};

export default Button;
