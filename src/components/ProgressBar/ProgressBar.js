import React from 'react';

const ProgressBar = ({ bgcolor, completed, increaseWidth }) => {
  const containerStyles = {
    height: 13,
    width: '543.745px',
    background: '#eff3f7',
    borderRadius: 50,
    margin: 50,
  };

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    background: `linear-gradient(${bgcolor} 0%, ${bgcolor} 100%)`,
    borderRadius: 'inherit',
    textAlign: 'right',
  };

  const labelStyles = {
    padding: 1,
    color: 'white',
  };

  return (
    <div>
      <div
        className='wrapper'
        style={containerStyles}
      >
        <div style={fillerStyles}>
          <span style={labelStyles}></span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
