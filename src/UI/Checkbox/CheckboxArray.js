import React, { useState } from 'react'
import Checkbox from './Checkbox'
import './Checkbox.css'

const CheckboxArray = ({ handleCheckboxChange }) => {
	const [checkedItems, setCheckedItems] = useState({})

	const handleChange = event => {
		const { name, checked } = event.target
		setCheckedItems({
			...checkedItems,
			[event.target.name]: event.target.checked,
		})
		handleCheckboxChange(checkedItems)
	}

	const checkboxes = [
		{
			name: 'home',
			key: 'checkBox1',
			label: 'Дом',
			customClass: 'custom-checkbox',
		},
		{
			name: 'sauna',
			key: 'checkBox2',
			label: 'Сауна',
			customClass: 'custom-checkbox',
		},
		{
			name: 'windowOne',
			key: 'checkBox3',
			label: 'Пластиковые окна',
			customClass: 'custom-checkbox',
		},
		{
			name: 'windowTwo',
			key: 'checkBox4',
			label: 'Деревянные окна',
			customClass: 'custom-checkbox',
		},
	]
	return (
		<div>
			{checkboxes.map(item => (
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
	)
}

export default CheckboxArray
