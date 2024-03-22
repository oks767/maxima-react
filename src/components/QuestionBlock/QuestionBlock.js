import React, { useState } from 'react'
import CheckboxArray from '../../UI/Checkbox/CheckboxArray'
import {
	default as derevo,
	default as home,
	default as sauna,
} from '../../images/home.jpg'

const QuestionBlock = ({ currentStepQ, handleCheckboxChange }) => {
	const [checkedItems, setCheckedItems] = useState({})
	const [completed, setCompleted] = useState(0)
	const [currentStep, setCurrentStep] = useState(1)
	return (
		<div>
			<div className='calculator__left-title'>
				<span>0{currentStepQ}.</span>
				<h3>
					{currentStep === 1 ? 'Что будем строить?' : 'Дополнительные вопросы'}
				</h3>
			</div>
			{currentStep === 1 && (
				<div className='calculator__cards'>
					<div>
						<img className='calculator__img' src={home} alt='home img' />
						<CheckboxArray handleCheckboxChange={handleCheckboxChange} />
					</div>
					<div>
						<img className='calculator__img' src={sauna} alt='sauna img' />
						<CheckboxArray handleCheckboxChange={handleCheckboxChange} />
					</div>
				</div>
			)}
			{currentStep === 2 && (
				<div>
					<div className='calculator__cards'>
						<div>
							<img className='calculator__img' src={window} alt='home img' />
							<CheckboxArray handleCheckboxChange={handleCheckboxChange} />
						</div>
						<div>
							<img className='calculator__img' src={sauna} alt='sauna img' />
							<CheckboxArray handleCheckboxChange={handleCheckboxChange} />
						</div>
					</div>
				</div>
			)}

			{currentStep === 3 && (
				<div>
					<div className='calculator__cards'>
						<div>
							<img className='calculator__img' src={derevo} alt='home img' />
							{/* <Checkbox /> */}
							<CheckboxArray handleCheckboxChange={handleCheckboxChange} />
						</div>
						<div>
							<img className='calculator__img' src={sauna} alt='sauna img' />
							{/* <Checkbox /> */}
							<CheckboxArray handleCheckboxChange={handleCheckboxChange} />
						</div>
					</div>
				</div>
			)}
			{currentStep === 4 && (
				<div>
					<div className='calculator__cards'>
						<div>
							<img className='calculator__img' src={derevo} alt='home img' />
							{/* <Checkbox /> */}
							<CheckboxArray handleCheckboxChange={handleCheckboxChange} />
						</div>
						<div>
							<img className='calculator__img' src={sauna} alt='sauna img' />
							{/* <Checkbox /> */}
							<CheckboxArray handleCheckboxChange={handleCheckboxChange} />
						</div>
					</div>
				</div>
			)}
			{currentStep === 5 && (
				<div>
					<div className='calculator__cards'>
						<div>
							<img className='calculator__img' src={derevo} alt='home img' />
							{/* <Checkbox /> */}
							<CheckboxArray handleCheckboxChange={handleCheckboxChange} />
						</div>
						<div>
							<img className='calculator__img' src={sauna} alt='sauna img' />
							{/* <Checkbox /> */}
							<CheckboxArray handleCheckboxChange={handleCheckboxChange} />
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default QuestionBlock
