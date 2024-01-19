import React from 'react';
import './Button.css';
import { useNavigate } from 'react-router-dom';

const Button = ({ props, clickHandler }) => {
  const navigate = useNavigate();
  const navigation = () => {
    // Выполнить навигацию на другую страницу
    navigate('/calculator');
  };

  return (
    <div>
      <button
        onClick={() => {
          if (clickHandler) {
            clickHandler(); // Вызываем переданный clickHandler, если он предоставлен
          }
          navigation(); // Вызываем функцию навигации
        }}
        className='button'
      >
        {props}
      </button>
    </div>
  );
};

export default Button;
