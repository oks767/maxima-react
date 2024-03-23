import React, { useEffect, useState } from 'react'
import Checkbox from './Checkbox'
import './Checkbox.css'

const CheckboxArray = ({ handleCheckboxChange, newTotalCost }) => {
	const [checkedItems, setCheckedItems] = useState({})
	const [buttonDisabled, setButtonDisabled] = useState(true)

	const checkboxes = [
		{
			name: 'check-box-1',
			key: 'checkBox1',
			label: '',
			price: 100, // пример цены для чекбокса 1
		},
		{
			name: 'check-box-2',
			key: 'checkBox2',
			label: '',
			price: 100, // пример цены для чекбокса 2
		},
	]
	const handleChange = event => {
		const { name, checked, price } = event.target
		const updatedItems = { ...checkedItems, [name]: { checked } }
		setCheckedItems(updatedItems)
		handleCheckboxChange(updatedItems)
	}

	useEffect(() => {
		handleCheckboxChange(checkedItems)
	}, [checkedItems, handleCheckboxChange])

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
