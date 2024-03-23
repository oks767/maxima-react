import React, { useState } from 'react'

import './Checkbox.css'

const Checkbox = ({ type = 'checkbox', name, checked = false, onChange }) => {
	const [isChecked, setIsChecked] = useState(checked)

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked)
		onChange({ target: { name, checked: !isChecked } })
	}
	return (
		<div className='wrapper-checkbox'>
			<input
				type={type}
				name={name}
				checked={isChecked}
				onChange={handleCheckboxChange}
			/>
		</div>
	)
}

export default Checkbox
