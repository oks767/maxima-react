import React, { useState } from 'react';
import './Checkbox.css';
import Checkbox from './Checkbox';

const CheckboxArray = ({ handleCheckboxChange }) => {
  const [checkedItems, setCheckedItems] = useState({});
  

  const handleChange = (event) => {
    const {name, checked} = event.target
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  handleCheckboxChange(checkedItems)
  };

  const checkboxes = [
    {
      name: 'check-box-1',
      key: 'checkBox1',
      label: '',
    },
    {
      name: 'check-box-2',
      key: 'checkBox2',
      label: '',
    },
  ];
  return (
    <div>
      {checkboxes.map((item) => (
        <>
          <label key={item.key}></label>
          <Checkbox
            name={item.name}
            checked={checkedItems[item.name] || false}
            onChange={handleChange}
          />
        </>
      ))}
    </div>
  );
};

export default CheckboxArray;
